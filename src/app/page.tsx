'use client'
import Image from "next/image";
import Nav from "./component/Nav";
import MobileNav from "./component/MobileNav";
import { useState } from "react";
import { Hero } from "./Hero";
import About from "./component/About";
import Service from "./component/Service";
import Skils from "./component/Skils";
import Project from "./component/Project";
import Testimorial from "./component/Testimorial";
import Blog from "./component/Blog";
import Footer from "./component/Footer";

const Home = () => {
  const [nav, setNav] = useState(false);
  const operNav = () => setNav(true);
  const closeNav = () => setNav(false);
 // Marking the component as client-side
 
  return (
    <div className="overflow-x-hidden">
      <div>
        {/** navbar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav operNav={operNav} />
         {/** hero section */}
          <Hero/>
          <div className="relative  z-30">
              {/** About section */}
              <About/>
              <Service/>
              <Skils/>
              <Project/>
              <Footer/>
          </div>

      </div>
     
    </div>
  );
};

export default Home;
