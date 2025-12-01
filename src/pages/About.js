import React from "react";
//import images
import WomanImg from "../img/about/woman-4.jpg";
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
              Utah. Color is the heart of my work. I'm often told my tones look
              "yummy", and that's exactly what I love - rich, soft, clean edits
              with the light that feels <b>intentional</b>. I love to create
              images that feels timeless and beautiful enough to live on your
              walls, not just a screen.
              <br />
              <br />
              Buttery colors.
              <br />
              Light you can feel.
              <br />
              Moments that matter.
              <br />
              Couples, families, brides.
              <br />
              When I create, I give it all.
              <br />
              Nothing is half-hearted.
            </p>

            <Link to={"/gallery"} className="btn">
              Explore my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
