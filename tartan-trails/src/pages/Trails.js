import React, { useState } from 'react';
import Navbar from '../components/NavbarLoggedin';
import Sidebar from '../components/SidebarLoggedin';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import ScrollToTop from '../components/ScrollToTop.js';
import {
  trailObjOne,
  trailObjTwo,
  trailObjThree,
  trailObjFour,
  trailObjFive
} from '../components/InfoSection/Data';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...trailObjOne} />
      <InfoSection {...trailObjTwo} />
      <InfoSection {...trailObjThree} />
      <InfoSection {...trailObjFour} />
      <InfoSection {...trailObjFive} />
      <Footer />
    </>
  );
}

export default Home;
