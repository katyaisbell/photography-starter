import React from "react";
//import images
import CoupleImg from "../img/price/couple.jpg";
//import link

//import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transitions";
//
import pricing from "../img/price/pricing.pdf";

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
              src={CoupleImg}
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
            <h1 className="h1 ">Pricing</h1>
            <p className="mb-12 mx-w-sm">
              I want to bring your vision to life! Whether you're dreaming of a
              romantic wedding shoot or a laid-back family portrait session, I'm
              here to make it happen. Let's chat about your ideas, and together,
              we'll create magic.
              {/* I understand that every client is unique, and so are their
              photography needs. From the initial consultation to the final
              delivery, I work closely with you to understand your vision and
              tailor my services to suit your preferences perfectly. My goal is
              to create an experience that's as seamless and enjoyable as it is
              unforgettable. */}
              <br />
              <br />
              Below you can find types of sessions I specialize in along with
              prices to give you an idea of investment.
            </p>

            <a href={pricing} download="pricing" className="btn">
              Download pricing
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
