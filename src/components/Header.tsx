import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../store/contactSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <header
      className=" text-slate-200 text-xl md:text-2xl lg:text-3xl
    h-20 shadow-lg flex items-center justify-center backdrop-blur-sm
    relative"
    >
      <div
        className="cursor-pointer text-slate-200 absolute left-5 top-7"
        onClick={handleSidebar}
      >
        <BiMenuAltLeft size={28} />
      </div>
      <h1>Contact Management App</h1>
    </header>
  );
};

export default Header;
