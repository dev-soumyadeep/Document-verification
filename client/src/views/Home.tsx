import React from "react";
import Navbar from "../components/utils/Navbar";
import Hero from "../components/homepage/Hero";
import ActivityCounter from "../components/homepage/ActivityCounter";
import Footer from "../components/homepage/Footer";
import PlatformInfo from "../components/homepage/PlatformInfo";

const navbaroptions = [
    { label: "Product", path: "/product" }, 
    { label: "Pricing", path: "/pricing" }, 
    { label: "Resources", path: "/resorces" }, 
]
const Home:React.FC = ()=>{
    return (
    <>
        <Navbar options={navbaroptions}/>
        <Hero/>
        <PlatformInfo/>
        <ActivityCounter/>
        <Footer/>
    </>
    )
}

export default Home