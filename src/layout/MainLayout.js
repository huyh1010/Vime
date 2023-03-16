import React from "react";
import { Outlet } from "react-router-dom";

// import MainFooter from "./MainFooter";
import NavBar from "./NavBar";

function MainLayout() {
  return (
    <div className="app">
      <NavBar />

      <Outlet />

      {/* <MainFooter /> */}
    </div>
  );
}

export default MainLayout;
