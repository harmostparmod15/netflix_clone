import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [erroMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    console.log(name?.current?.value);
    setErrorMessage(message);

    if (message) return;
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          className="   "
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        ></img>
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
