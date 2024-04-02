import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return (
    <div
      className={`flex  ${
        darkTheme ? "bg-slate-500 text-slate-50" : "bg-white"
      }`}
    >
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
