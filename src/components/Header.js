import { useNavigate } from "react-router-dom";

import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store?.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between w-screen px-8 py-2 absolute bg-gradient-to-b from-black z-10">
      <img
        className="w-44 "
        alt="header-logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      ></img>
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
