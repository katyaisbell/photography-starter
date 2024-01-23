import React, { useState } from "react";
import { MdClose } from "react-icons/md";

//import images
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
import Image37 from "../img/portfolio/37.jpg";
import Image38 from "../img/portfolio/38.jpg";
import Image39 from "../img/portfolio/39.jpg";
import Image40 from "../img/portfolio/40.jpg";
import Image41 from "../img/portfolio/41.jpg";
import Image42 from "../img/portfolio/42.jpg";
import Image43 from "../img/portfolio/43.jpg";
import Image44 from "../img/portfolio/44.jpg";
import Image45 from "../img/portfolio/45.jpg";
import Image46 from "../img/portfolio/46.jpg";
import Image47 from "../img/portfolio/47.jpg";
import Image48 from "../img/portfolio/48.jpg";
import Image49 from "../img/portfolio/49.jpg";
import Image50 from "../img/portfolio/50.jpg";
import Image51 from "../img/portfolio/51.jpg";
import Image52 from "../img/portfolio/52.jpg";
import Image53 from "../img/portfolio/53.jpg";
import Image54 from "../img/portfolio/54.jpg";
import Image55 from "../img/portfolio/55.jpg";
import Image56 from "../img/portfolio/56.jpg";
import Image57 from "../img/portfolio/57.jpg";
import Image58 from "../img/portfolio/58.jpg";
import Image59 from "../img/portfolio/59.jpg";
import Image60 from "../img/portfolio/60.jpg";
import Image61 from "../img/portfolio/61.jpg";
import Image62 from "../img/portfolio/62.jpg";
import Image63 from "../img/portfolio/63.jpg";
import Image64 from "../img/portfolio/64.jpg";
import Image65 from "../img/portfolio/65.jpg";
import Image66 from "../img/portfolio/66.jpg";
import Image67 from "../img/portfolio/67.jpg";

//import links
import { Link } from "react-router-dom";
//import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transitions";

const Gallery = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative lg:pt-32">
        <div className="flex flex-col  h-full items-center justify-start gap-x-24 text-center lg:text-center pt-36 lg:pt-36 pb-8">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-center"
          >
            {/* <h1 className="h1 ">Gallery</h1> */}
            <p className="mb-12 mx-w-sm">The art inspired by you.</p>
            {/* <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link> */}
          </motion.div>

          {/* image grid */}
          <div className="grid grid-cols-2 lg:gap-2">
            {/* image */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image1}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image2}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image3}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const Gallery2 = () => {
  let data = [
    {
      id: 1,
      imgSrc: Image1,
    },

    {
      id: 2,
      imgSrc: Image2,
    },

    {
      id: 3,
      imgSrc: Image3,
    },

    {
      id: 4,
      imgSrc: Image4,
    },

    {
      id: 5,
      imgSrc: Image5,
    },

    // {
    //   id: 6,
    //   imgSrc: Image6,
    // },

    // {
    //   id: 7,
    //   imgSrc: Image7,
    // },

    {
      id: 8,
      imgSrc: Image8,
    },

    {
      id: 10,
      imgSrc: Image10,
    },

    {
      id: 11,
      imgSrc: Image11,
    },
    {
      id: 12,
      imgSrc: Image12,
    },
    {
      id: 13,
      imgSrc: Image13,
    },
    // {
    //   id: 14,
    //   imgSrc: Image14,
    // },
    // {
    //   id: 15,
    //   imgSrc: Image15,
    // },
    {
      id: 16,
      imgSrc: Image16,
    },
    {
      id: 17,
      imgSrc: Image17,
    },
    {
      id: 18,
      imgSrc: Image18,
    },
    // {
    //   id: 19,
    //   imgSrc: Image19,
    // },
    {
      id: 20,
      imgSrc: Image20,
    },
    {
      id: 21,
      imgSrc: Image21,
    },
    {
      id: 22,
      imgSrc: Image22,
    },
    {
      id: 23,
      imgSrc: Image23,
    },
    {
      id: 24,
      imgSrc: Image24,
    },
    {
      id: 25,
      imgSrc: Image25,
    },
    {
      id: 26,
      imgSrc: Image26,
    },
    {
      id: 27,
      imgSrc: Image27,
    },
    {
      id: 28,
      imgSrc: Image28,
    },
    {
      id: 29,
      imgSrc: Image29,
    },
    {
      id: 30,
      imgSrc: Image30,
    },
    {
      id: 31,
      imgSrc: Image31,
    },
    // {
    //   id: 32,
    //   imgSrc: Image32,
    // },
    // {
    //   id: 33,
    //   imgSrc: Image33,
    // },
    {
      id: 34,
      imgSrc: Image34,
    },
    {
      id: 35,
      imgSrc: Image35,
    },
    {
      id: 36,
      imgSrc: Image36,
    },
    // {
    //   id: 37,
    //   imgSrc: Image37,
    // },
    {
      id: 38,
      imgSrc: Image38,
    },
    // {
    //   id: 39,
    //   imgSrc: Image39,
    // },
    {
      id: 40,
      imgSrc: Image40,
    },
    {
      id: 41,
      imgSrc: Image41,
    },
    // {
    //   id: 42,
    //   imgSrc: Image42,
    // },
    {
      id: 43,
      imgSrc: Image43,
    },
    {
      id: 44,
      imgSrc: Image44,
    },
    {
      id: 45,
      imgSrc: Image45,
    },

    {
      id: 46,
      imgSrc: Image46,
    },
    {
      id: 47,
      imgSrc: Image47,
    },
    {
      id: 48,
      imgSrc: Image48,
    },
    // {
    //   id: 49,
    //   imgSrc: Image49,
    // },
    {
      id: 50,
      imgSrc: Image50,
    },
    {
      id: 51,
      imgSrc: Image51,
    },
    {
      id: 52,
      imgSrc: Image52,
    },
    // {
    //   id: 53,
    //   imgSrc: Image53,
    // },
    {
      id: 54,
      imgSrc: Image54,
    },
    // {
    //   id: 55,
    //   imgSrc: Image55,
    // },
    // {
    //   id: 56,
    //   imgSrc: Image56,
    // },
    {
      id: 57,
      imgSrc: Image57,
    },
    // {
    //   id: 58,
    //   imgSrc: Image58,
    // },
    {
      id: 59,
      imgSrc: Image59,
    },
    // {
    //   id: 60,
    //   imgSrc: Image60,
    // },
    // {
    //   id: 61,
    //   imgSrc: Image61,
    // },
    // {
    //   id: 62,
    //   imgSrc: Image62,
    // },
    {
      id: 63,
      imgSrc: Image63,
    },
    // {
    //   id: 64,
    //   imgSrc: Image64,
    // },
    // {
    //   id: 65,
    //   imgSrc: Image65,
    // },
    // {
    //   id: 66,
    //   imgSrc: Image66,
    // },
    {
      id: 67,
      imgSrc: Image67,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <MdClose onClick={() => setModel(false)} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: "-80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-80%" }}
        transition={transition1}
        className="flex flex-col sm:items-center"
      >
        {/* <h1 className="h1 ">Gallery</h1> */}
        <p className="mb-12 mt-12 mx-w-sm ">The art inspired by you</p>
        {/* <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link> */}
      </motion.div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img
                src={item.imgSrc}
                style={{ width: "100%" }}
                className="object-cover hover:scale-110 transition-all duration-500"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery2;
