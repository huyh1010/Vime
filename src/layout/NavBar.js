import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import UserIcon from "../components/UserIcon";
import { useSearchParams } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "./NavBar.css";

function NavBar() {
  const [show, setShow] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams({ search: "" });

  const transitionAppBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  // console.log("searchParams", searchParams.get("search"));
  const handleSubmit = (e) => {
    e.preventDefault();
    let param = e.target[0].value;

    setSearchParams({ ...searchParams, search: param });
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
          <NavLink to="/discover/movie" className={"link"}>
            Movies
          </NavLink>
          <NavLink to="/discover/tv" className={"link"}>
            TV Shows
          </NavLink>
          <NavLink to="/favorite" className={"link"}>
            Your Favorites
          </NavLink>
        </div>

        <div className="nav-content-two">
          <form onSubmit={handleSubmit} className="form">
            <input
              name="search-input"
              label="search-input"
              className="search"
              type="text"
              placeholder="Search.."
            />
            <IconButton
              type="submit"
              sx={{ p: "10px", color: "black", position: "absolute", right: 0 }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </form>
          <UserIcon className="user-icon" sx={{ width: "10px" }} />
          <h2 className="user-profile">User</h2>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
