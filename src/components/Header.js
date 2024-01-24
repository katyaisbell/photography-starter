import React from "react";
//import components
import Socials from "./Socials";
// import Logo from "../img/header/logo-tent.png";
import MobileNav from "./MobileNav";

//import link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo */}
        {/* <Link to={"/"} className="max-w-[70px] lg:max-w-[100px]">
          <img src={Logo} alt="" />
        </Link> */}
        {/* Nav - initially hidden - show on desktop mode */}
        <nav className="hidden xl:flex gap-x-12 ">
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Home
          </Link>
          <Link
            to={"/gallery"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Gallery
          </Link>
          <Link
            to={"/about"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* Socials */}
      <Socials />

      {/* MobileNav */}
      <MobileNav />
    </header>
  );
};

export default Header;
