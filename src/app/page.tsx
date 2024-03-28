'use client'
import Image from "next/image";
import Nav from "./component/Nav";
import MobileNav from "./component/MobileNav";
import { useState } from "react";
import { Hero } from "./Hero";
import About from "./component/About";

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
          </div>
      </div>
     
    </div>
  );
};

export default Home;
