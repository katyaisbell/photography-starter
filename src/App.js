import React from "react";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";

import AnimRoutes from "./components/AnimRoutes";

//import router
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
        <Footer />
      </Router>
    </>
  );
};

export default App;
