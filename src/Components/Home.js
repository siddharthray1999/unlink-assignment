import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import spaceximg from "../Assets/spaceximg.jpg";
const Home = () => {
  return (
    <div className="bg-[#EFEFEF] h-[100vh] flex justify-center items-center">
      <Sidebar />
      <div
        className="w-4/6  h-full rounded-r-xl"
        style={{
          backgroundImage: `url(${spaceximg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
