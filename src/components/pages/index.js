import React, {useState} from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";
import {homeObjOne, homeObjThree, homeObjTwo} from "../InfoSection/Data";
import Services from "../Services";
import InfoSectionPage from "../InfoSection/indexPage2";
import InfoSectionPage3 from "../InfoSection/indexPage3";
import Footer from "../Footer";


export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne} />
            <InfoSectionPage {...homeObjTwo}/>
            <Services/>
            <InfoSectionPage3 {...homeObjThree}/>
            <Footer />
        </>
    )
};

export default Home