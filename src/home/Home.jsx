import React from "react";
import Landing from "./Landing";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";

const Home = () => {
  return (
    <div>
      <Landing />
      <About />
      <Services />
      <Projects />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
