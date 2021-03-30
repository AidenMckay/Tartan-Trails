import React, { useState } from 'react';
import { Gnomes as GnomesSection } from '../components/Gnomes';
import Navbar from '../components/NavbarLoggedin';
import Sidebar from '../components/SidebarLoggedin';
import Footer from '../components/Footer';

const Gnomes = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <GnomesSection />
            <Footer />
        </>
    )
}

export default Gnomes
