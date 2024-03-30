import React, { useState } from "react";
//import motion
import { motion } from "framer-motion";
//import transition
import { transition1 } from "../transitions";

const Insight = () => {
  const [advice, setAdvice] = useState("");
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "-80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-80%" }}
        transition={transition1}
        className="flex flex-col sm:items-center"
      >
        <h1 className="ml-12 mr-12 mb-12 mt-52 text-center">{advice}</h1>
        <button className="btn mb-12" onClick={getAdvice}>
          Seeking insight?
        </button>
      </motion.div>
    </>
  );
};

export default Insight;
