import React from "react";
import {Route, Routes} from "react-router-dom";
import Header from "../common/Header.jsx";
import Footer from "../common/Footer.jsx";
import Home from "../home/Home";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Portfolio from "./Portfolio.jsx";
import Blog from "./Blog.jsx";
import Testimonials from "./Testimonials.jsx";
import Contact from "./Contact.jsx";
import NotFoundPage from "./NotFoundPage.jsx";

export default function Pages() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Testimonials" element={<Testimonials />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
