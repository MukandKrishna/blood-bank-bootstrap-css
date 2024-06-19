import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../../../redux/features/auth/authActions";
// import { useSelector } from "react-redux";
// import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import "./Header.css";
import logo from "../../../../src/pages/logo.png";
const Header = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    (async function fetchUserData() {
      const userResponse = await getUser();
      if (userResponse && userResponse.user) {
        setUserData(userResponse.user);
      }
    })();
  }, []);

  const handlelogout = () => {
    localStorage.clear();
    alert("Login Successfully");
    Navigate("/login");
  };

  return (
    <div class="navbar">
      <div class="navbar-logo">
        <img src={logo} alt="Logo" />
        DMYF BLOOD BANK{" "}
      </div>
      <div class="navbar-links">
        <BiUserCircle /> Welcome {userData?.name || userData?.Admin}
        <button className="nav-btn" onClick={handlelogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
