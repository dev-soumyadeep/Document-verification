import React from "react";
import Navbar from "../components/homepage/Navbar";
import Hero from "../components/homepage/Hero";
import ActivityCounter from "../components/homepage/ActivityCounter";
import Footer from "../components/homepage/Footer";
import PlatformInfo from "../components/homepage/PlatformInfo";
const Home:React.FC = ()=>{
    return (
    <>
        <Navbar/>
        <Hero/>
        <PlatformInfo/>
        <ActivityCounter/>
        <Footer/>
    </>
    )
}

export default Home