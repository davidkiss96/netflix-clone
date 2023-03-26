import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "pages/HomeScreen";
import LoginScreen from "pages/LoginScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "store/userSlice";
import ProfileScreen from "pages/ProfileScreen";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // Loggen in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="bg-dark">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={!user ? <LoginScreen /> : <Navigate to={"/"} />} />
          <Route path="/" element={user ? <HomeScreen /> : <Navigate to={"/login"} />} />
          <Route path="profile" element={user ? <ProfileScreen /> : <Navigate to={"/login"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
