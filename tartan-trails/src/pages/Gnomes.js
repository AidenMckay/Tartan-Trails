import React from 'react';
import { Gnomes as GnomesSection } from '../components/Gnomes';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Gnomes = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <GnomesSection />
            <Footer />
        </>
    )
}

export default Gnomes
