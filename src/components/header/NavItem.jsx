import React from "react";

const NavItem = ({ text }) => {
  return (
    <a href="#" className="relative py-8 group">
      <span className="peer text-gray-500 hover:text-gray-700">{text}</span>
      <span className="absolute bottom-0  block h-1 w-full group-hover:bg-orange-primary scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
    </a>
  );
};

export default NavItem;
