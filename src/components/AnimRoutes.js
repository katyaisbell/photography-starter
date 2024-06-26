import React from "react";
//import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Pricing from "../pages/Pricing";

//import routes route & useLocation hook
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
