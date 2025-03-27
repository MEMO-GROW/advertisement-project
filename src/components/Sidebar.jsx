import React from "react";
import K from "../constants";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 bg-white h-screen py-4 px-2 gap-y-6 fixed left-0 top-0">
      <span className="text-black">Elegance</span>
      <div className="flex flex-col gap-y-6">
        {K.NAVLINKS.map((link, index) => {
          return (
            <NavLink
              key={index}
              to={link.path}
              className="text-black hover:bg-red-600 hover:text-white px-3 py-2 w-full rounded-md flex gap-x-2 items-center"
            >
              <link.icon />
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </div>

      <button className="mt-auto bg-red-600 text-white px-3 py-2 w-full rounded-md">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
