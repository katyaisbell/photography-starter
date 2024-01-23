import React from "react";

import Image1 from "../img/portfolio/1.jpg";
import Image2 from "../img/portfolio/2.jpg";
import Image3 from "../img/portfolio/3.jpg";
import Image4 from "../img/portfolio/4.jpg";
import Image5 from "../img/portfolio/5.jpg";
import Image6 from "../img/portfolio/6.jpg";
import Image7 from "../img/portfolio/7.jpg";
import Image8 from "../img/portfolio/8.jpg";
// import Image9 from "../img/portfolio/9.jpg";
import Image10 from "../img/portfolio/10.jpg";
import Image11 from "../img/portfolio/11.jpg";
import Image12 from "../img/portfolio/12.jpg";
import Image13 from "../img/portfolio/13.jpg";
import Image14 from "../img/portfolio/14.jpg";
import Image15 from "../img/portfolio/15.jpg";
import Image16 from "../img/portfolio/16.jpg";
import Image17 from "../img/portfolio/17.jpg";
import Image18 from "../img/portfolio/18.jpg";
import Image19 from "../img/portfolio/19.jpg";
import Image20 from "../img/portfolio/20.jpg";
import Image21 from "../img/portfolio/21.jpg";
import Image22 from "../img/portfolio/22.jpg";
import Image23 from "../img/portfolio/23.jpg";
import Image24 from "../img/portfolio/24.jpg";
import Image25 from "../img/portfolio/25.jpg";
import Image26 from "../img/portfolio/26.jpg";
import Image27 from "../img/portfolio/27.jpg";
import Image28 from "../img/portfolio/28.jpg";
import Image29 from "../img/portfolio/29.jpg";
import Image30 from "../img/portfolio/30.jpg";
import Image31 from "../img/portfolio/31.jpg";
import Image32 from "../img/portfolio/32.jpg";
import Image33 from "../img/portfolio/33.jpg";
import Image34 from "../img/portfolio/34.jpg";
import Image35 from "../img/portfolio/35.jpg";
import Image36 from "../img/portfolio/36.jpg";

// import images
import WomanImg from "../img/home/katya2.jpg";

//import link
import { Link } from "react-router-dom";

//import motion
import { motion } from "framer-motion";

//import transition
import { transition1 } from "../transitions";

import Gallery2 from "../pages/Gallery";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Home = () => {
  return (
    <>
      <div className="sm:pb-0 md:pb-72">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition1}
          className="section bg-bottega"
        >
          <div className="container mx-auto h-full lg:h-screen relative">
            {/* text & img wrapper */}
            <div className="flex flex-col justify-center">
              {/* text */}
              <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-50%" }}
                transition={transition1}
                className="w-full pt-36 pb-0 lg:pt-0 lg:pb-0 lg:w-auto  z-10 lg:absolute flex flex-col justify-center items-center lg:items-start "
              >
                <motion.h1
                  whileHover={{ scale: 1.4, color: "#92764e" }}
                  transition={transition1}
                  className="h1 text-gold font-accent uppercase font-normal "
                >
                  katya isbell
                  <br />
                </motion.h1>
                <p className="text-[18px] lg:text-[26px] font-secondary mb-4 lg:mb-12">
                  Photographer from Salt Lake City, Utah
                </p>
                <Link to={"/contact"} className="btn bg-gold mb-[30px]">
                  Hire me
                </Link>
              </motion.div>

              <div className="sm:hidden lg:block w-full pt-36 lg:pt-0 lg:pb-[180px] lg:w-auto lg:-left-[850px] z-1 lg:absolute text-transparent text-stroke-2 flex flex-col">
                <motion.h1
                  initial={{ opacity: 0, x: "-50%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "-50%" }}
                  transition={transition1}
                  className="h1  font-accent uppercase font-normal lg:-right-27"
                >
                  katya isbell
                </motion.h1>
              </div>

              <div className="sm:hidden lg:block w-full pt-36 lg:pt-0 lg:pb-[180px] lg:w-auto lg:-right-[900px] z-1 lg:absolute text-transparent text-stroke-2 flex flex-col">
                <motion.h1
                  initial={{ opacity: 0, x: "-50%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "-50%" }}
                  transition={transition1}
                  className="h1  font-accent uppercase font-normal lg:-right-27"
                >
                  katya isbell
                </motion.h1>
              </div>

              {/* image */}
              <div className="flex justify-end max-h-max ">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={transition1}
                  className="relative lg:-right-40"
                >
                  <motion.img
                    whileHover={{ scale: 1.3 }}
                    transition={transition1}
                    src={WomanImg}
                    alt=""
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      <div className="pt-28 pb-12">
        {" "}
        <Gallery2 />
      </div>

      <div className="pb-52">
        <About />
      </div>
      <div className="pb-36">
        {" "}
        <Contact />
      </div>
    </>
  );
};

export default Home;
