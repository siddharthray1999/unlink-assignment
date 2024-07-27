import React from "react";
import spacex from "../Assets/spacex.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-1/6 h-full rounded-l-xl bg-white p-10">
      <div className="">
        <img src={spacex} alt="logo" />
      </div>

      <div className="mt-10">
        <ul>
          <Link to="/dashbored">
            <li className="text-2xl ">Dashbored</li>
          </Link>
          <Link to="/Rocket">
            <li className="text-2xl ">Rockets</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
