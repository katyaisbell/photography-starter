import React from "react";
//import images
import WomanImg from "../img/about/woman-3.jpg";
//import link
import { Link } from "react-router-dom";
//import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transitions";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full sm:h-fit relative lg:pt-32">
        {/* text &img wrapper */}
        <div className="bg-white-200  flex flex-col lg:flex-row h-full sm:h-fit items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16 ">
          {/* image */}
          <div className="flex-1 sm:pt-14 max-h-fit order-2 lg:order-none">
            {/* <img src={WomanImg} alt="" /> */}
            <motion.img
              whileHover={{ scale: 0.8 }}
              transition={transition1}
              src={WomanImg}
              alt=""
            />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 sm:pt-36 pt-36 pb-0 lg:pt-20 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1 ">About me</h1>
            <p className="mb-12 mx-w-sm">
              Hello, I'm Katya, a photographer from{" "}
              <span className="font-accent text-[24px]">salt.</span> Lake City,
              Utah. I specialize in capturing the beauty of love, the essence of
              individuals, and the allure of editorial aesthetics. I love to
              transform moments into <b>memories </b>
              and portraits into <b>visual poetry</b>.
              <br />
              <br />
              My style can be described as a blend of <b>timeless </b> elegance
              and <b>contemporary </b>
              flair. I believe in creating images that transcend trends,
              ensuring that your photographs remain cherished and relevant for
              years to come.
            </p>
            <Link to={"/gallery"} className="btn">
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
