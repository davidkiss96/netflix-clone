import React, { useState } from "react";
import SignupScreen from "./SignupScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="relative h-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="">
        <img
          className="fixed left-0 w-36 object-contain pl-5"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button
          onClick={() => setSignIn(true)}
          className="fixed right-5 top-5 py-2 px-5 text-base cursor-pointer font-semibold bg-buttonColorRed text-white rounded-md"
        >
          Sign In
        </button>
        <div className="w-full h-screen z-10 bg-black/40 bg-gradient-to-t from-black/80 via-black/0 to-black/80"></div>
      </div>

      <div className="z-10 text-white p-5 absolute top-1/3 mx-auto text-center left-0 right-0">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1 className="text-5xl mb-5">Unlimited films, TV programmes and more.</h1>
            <h2 className="font-normal text-3xl mb-7">Watch anywhere. Cancele at any time.</h2>
            <h3 className="font-normal text-xl">
              Ready to watch? Enter your email to create or restart your membership.
            </h3>

            <div className="m-5">
              <form>
                <input
                  className="p-2 outline-0 h-12 w-1/3 max-w-[600px] border-none"
                  type="email"
                  placeholder="Email Address"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="capitalize px-5 py-3 text-base border-none text-white bg-buttonColorRed cursor-pointer font-semibold"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
