import React from "react";

// import images
import WomanImg from "../img/home/10.jpg";

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
      {/* <div className="sm:pb-0 md:pb-72">
        <motion.section
          initial={{ opacity: 2 }}
          animate={{ opacity: 2 }}
          exit={{ opacity: 0 }}
          transition={transition1}
          className="section bg-bottega w-full"
        >
          <div className="flex justify-center h-full w-full">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              // className="relative lg:-right-4"
              className="my-32 mx-32 flex justify-center h-full w-full"
            >
              <motion.img
                whileHover={{ scale: 1 }}
                transition={transition1}
                src={WomanImg}
                alt=""
              />
            </motion.div>
          </div> */}
      {/* <div className="container mx-auto h-full lg:h-screen relative"> */}
      {/* <div className="container w-full bg-red"> */}
      {/* text & img wrapper */}
      {/* <div className="flex flex-col justify-center w-full mb-16 bg-purple"> */}
      {/* text */}

      {/* <motion.div
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
      {/* <div className="flex justify-center max-h-max w-full bg-red">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={transition1}
                  // className="relative lg:-right-4"
                  className="relative "
                >
                  <motion.img
                    whileHover={{ scale: 1.3 }}
                    transition={transition1}
                    src={WomanImg}
                    alt=""
                  />
                </motion.div>
              </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </motion.section>
      </div> */}

      <div className="sm:pb-0 md:pb-72 ">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition1}
          className="section bg-bottega"
        >
          <div className="container mx-auto  h-screen lg:h-screen relative">
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
                  whileHover={{ scale: 1 }}
                  transition={transition1}
                  className="h1  font-accent font-normal lowercase text-primary "
                >
                  salt. <br />
                </motion.h1>

                <p className="text-[18px] lg:text-[26px] font-secondary mb-4 lg:mb-12">
                  Photography from Salt Lake City, Utah
                </p>
                <Link to={"/about"} className="btn bg-primary mb-[30px]">
                  Curious?
                </Link>
              </motion.div>

              {/* <div className="sm:hidden lg:block w-full pt-36 lg:pt-0 lg:pb-[180px] lg:w-auto lg:-left-[850px] z-1 lg:absolute text-transparent text-stroke-2 flex flex-col">
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
              </div> */}

              {/* image */}
              <div className="flex justify-end max-h-max">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={transition1}
                  className="relative lg:-right-40"
                >
                  <motion.img
                    className=""
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
