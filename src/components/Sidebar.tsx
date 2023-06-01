import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((state: any) => state?.contact);

  return (
    <section
      className="sidebar_container shadow-lg border-r border-slate-800 pt-10 pl-6 fixed top-20 left-0 z-30"
      style={{
        height: "calc(100vh - 5rem)",
        width: isSidebarOpen ? "300px" : "0px",
        marginLeft : isSidebarOpen ? "0" : "-60px",
        overflow: "hidden",
      }}
    >
      <NavLink to="/">
        <p className="text-2xl mt-8 font-semibold text-slate-200 tracking-wide border border-transparent hover:bg-white hover:text-inherit py-2 transition-all duration-200 ease-in-out w-fit px-6 rounded-lg">
          Contact List
        </p>
      </NavLink>
      <NavLink to="/add">
        <p className="text-2xl mt-8 font-semibold text-slate-200 tracking-wide border border-transparent hover:bg-white hover:text-inherit py-2 transition-all duration-200 ease-in-out w-fit px-6 rounded-lg">
          Add Contact
        </p>
      </NavLink>
      <NavLink to="/dashboard">
        <p className="text-2xl mt-8 font-semibold text-slate-200 tracking-wide border border-transparent hover:bg-white hover:text-inherit py-2 transition-all duration-200 ease-in-out w-fit px-6 rounded-lg">
          Dashboard
        </p>
      </NavLink>
    </section>
  );
};

export default Sidebar;
