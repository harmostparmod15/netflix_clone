import { useNavigate } from "react-router-dom";

import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store?.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unSubscribe();
  }, []);

  return (
    <div className="flex justify-between w-screen px-8 py-2 absolute bg-gradient-to-b from-black z-10">
      <img className="w-44 " alt="header-logo" src={LOGO}></img>
      {user && (
        <div className="flex  p-2 ">
          <img className="w-12 h-12" alt="user-icon" src={user?.photoURL}></img>
          <button onClick={handleSignOut} className=" text-white font-bold  ">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
