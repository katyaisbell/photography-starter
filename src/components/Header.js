import React from "react";
//import components
import Socials from "./Socials";
import Logo from "../img/header/logo.png";
import MobileNav from "./MobileNav";

//import link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Nav - initially hidden - show on desktop mode */}
        <nav className="hidden xl:flex gap-x-12 ">
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary uppercase transition"
          >
            Home
          </Link>
          <Link
            to={"/gallery"}
            className="text-[#696c6d] hover:text-primary uppercase transition"
          >
            Gallery
          </Link>
        </nav>
        {/* Logo */}
        {/* <Link to={"/"} className="max-w-[100px] lg:max-w-[300px]">
          <img src={Logo} alt="" />
        </Link> */}
        <nav className="hidden xl:flex gap-x-12 ">
          <Link
            to={"/about"}
            className="text-[#696c6d] hover:text-primary uppercase transition"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d] hover:text-primary uppercase transition"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Socials */}
      {/* <Socials /> */}

      {/* MobileNav */}
      <MobileNav />
    </header>

    // <header>
    //   {/* Logo */}
    //   <div className="fixed flex items-center justify-between top-0 left-1/2 transform -translate-x-1/2 p-4 z-50">
    //     <Link
    //       to={"/"}
    //       className="max-w-[500px] lg:max-w-[500px] w-full  z-10 lg:absolute center"
    //     >
    //       <img
    //         src={Logo}
    //         alt=""
    //         // className=" flex items-center sm:px-[10px] lg:px-[80px] h-[100px]"
    //       />
    //     </Link>
    //   </div>

    //   {/* Nav - initially hidden - show on desktop mode */}
    //   <div className="">
    //     <nav className=" fixed flex items-center justify-between w-full h-[100px] px-[30px] lg:px-[100px] hidden xl:flex gap-x-12 ">
    //       <div className="left hidden xl:flex gap-x-12 ">
    //         <Link
    //           to={"/"}
    //           className="text-[#696c6d] hover:text-primary transition"
    //         >
    //           Home
    //         </Link>
    //         <Link
    //           to={"/gallery"}
    //           className="text-[#696c6d] hover:text-primary transition"
    //         >
    //           Gallery
    //         </Link>
    //       </div>
    //       <div className="right hidden xl:flex gap-x-12 ">
    //         {" "}
    //         <Link
    //           to={"/about"}
    //           className="text-[#696c6d] hover:text-primary transition"
    //         >
    //           About
    //         </Link>
    //         <Link
    //           to={"/contact"}
    //           className="text-[#696c6d] hover:text-primary transition"
    //         >
    //           Contact
    //         </Link>
    //       </div>
    //     </nav>
    //   </div>

    //   {/* MobileNav */}
    //   <MobileNav />
    // </header>
  );
};

export default Header;
