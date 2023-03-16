import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import UserIcon from "../components/UserIcon";
import "./NavBar.css";

function NavBar() {
  const [show, setShow] = useState(false);

  const transitionAppBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionAppBar);
    return () => window.removeEventListener("scroll", transitionAppBar);
  }, []);
  return (
    <div className={`nav ${show && "nav_bgcolor"}`}>
      <div className="nav-contents">
        <div className="nav-content-one">
          <Logo />
          <NavLink className={"link"}>Movies</NavLink>
          <NavLink className={"link"}>TV Shows</NavLink>
        </div>
        <div className="nav-content-two">
          <input className="search" type="text" placeholder="Search.." />
          <UserIcon className="user-icon" sx={{ width: "10px" }} />
          <h2 className="user-profile">User</h2>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
