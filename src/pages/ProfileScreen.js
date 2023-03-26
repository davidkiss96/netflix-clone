import Nav from "components/Nav";
import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "store/userSlice";
import { auth } from "../firebase";
import PlansScreen from "./PlansScreen";

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className="h-screen text-white ">
      <Nav />
      <div className="flex flex-col w-1/2 mx-auto max-w-[800px] pt-[8%]">
        <h1 className="text-6xl font-normal border-b-2 border-darkGray mb-5">Edit Profile</h1>
        <div className="flex">
          <img
            alt=""
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
            className="h-24"
          />
          <div className="text-white ml-6 flex-1">
            <h2 className="bg-gray-400 p-4 text-sm pl-5">{user?.email}</h2>
            <div className="mt-5">
              <h3 className="pb-2 border-b-2 border-darkGray text-xl font-medium">Plans</h3>
              <PlansScreen />
              <button
                className="py-2 px-5 text-base mt-[5%] w-full text-white bg-buttonColorRed font-semibold cursor-pointer"
                onClick={() => signOut(auth)}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
