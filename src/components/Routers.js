import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Treatment from "../pages/Treatment";
import Home from "../pages/Home";

function Routers() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" index Component={Home} />
        <Route exact path="/Quem-Somos" Component={About} />
        <Route exact path="/Tratamentos" Component={Treatment} />
        <Route exact path="/Fale-Conosco" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
