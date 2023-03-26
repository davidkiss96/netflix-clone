import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`fixed top-0 p-4 w-full h-16 z-10 transition-all duration-200 ease-in  ${show && "bg-dark"}`}>
      <div className="flex justify-between">
        <img
          onClick={() => navigate("/")}
          className="fixed left-0 w-24 object-contain pl-5 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <img
          onClick={() => navigate("profile")}
          className="fixed right-5 w-7 h-7 cursor-pointer"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
