import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";

const SignupScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {})
      .catch((error) => alert(error.message));
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userAuth) => {})
      .catch((error) => alert(error));
  };

  return (
    <div className="max-w-md p-16 mx-auto bg-black/80">
      <form className="grid flex-col">
        <h1 className="text-left mb-6">Sign In</h1>
        <input ref={emailRef} className="signupFormInput" type="email" placeholder="Email" />
        <input ref={passwordRef} className="signupFormInput" type="password" placeholder="Password" />
        <button
          onClick={signIn}
          className="bg-buttonColorRed py-3 px-5 text-white rounded-md mt-5 cursor-pointer font-semibold text-base border-none"
          type="submit"
        >
          Sign In
        </button>

        <h4 className="mt-7 text-left">
          <span className="text-gray-500">New to Netflix? </span>
          <span className="hover:cursor-pointer hover:underline" onClick={register}>
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
