import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { BG_URL, USER_AVATAR_URL } from "../utils/constants";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [erroMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // sign up & sign in Logic

    // sign-up Logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: USER_AVATAR_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth?.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error?.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      // sign-in Logic
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " -  " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img className="   " alt="logo" src={BG_URL}></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" text-white w-4/12 mx-auto gap-4 bg-opacity-[0.85] absolute my-12 left-0 right-0 bg-black  p-16 flex flex-col"
      >
        <h1 className=" text-4xl pb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            className="py-4 px-8 rounded-md bg-slate-700"
            type="text "
            placeholder="Enter Name"
          ></input>
        )}

        <input
          ref={email}
          className="py-4  px-8 rounded-md bg-slate-700"
          type="text"
          placeholder="Enter Email"
        ></input>

        <input
          ref={password}
          className="py-4 px-8 rounded-md bg-slate-700"
          type="password"
          placeholder="Enter Password"
        ></input>

        <p className="text-red-500">{erroMessage}</p>

        <button
          onClick={handleButtonClick}
          className="py-4 bg-red-600 my-4 font-bold rounded-md"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-12 relative left-1 text-slate-500">
          {isSignInForm ? " New to Netflix?" : " Already a User?   "}
          <span
            onClick={toggleSignInForm}
            className="cursor-pointer text-white"
          >
            {isSignInForm ? "Sign up now" : "  Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};
export default Login;
