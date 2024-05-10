import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
