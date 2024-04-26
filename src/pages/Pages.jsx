import React from "react";
import Home from "./Home";
import NavIcons from "../components/NavIcons";
import {  Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "../components/Cuisine";
import Searched from "./Searched";
import Recipie from "./Recipie";
import { AnimatePresence } from "framer-motion";
function Pages() {
  const location = useLocation()
  return (
    
      <div>
        <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:id" element={<Recipie />} />
        </Routes>
        </AnimatePresence>
      </div>
    
  );
}

export default Pages;
