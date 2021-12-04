import React from "react";
import "./MainPage.css";
import NavBar from "./home/navbar/NavBar";
import Home from "./home/Home";
import HowWork from "./howwork/HowWork";
import AvtoRep from "./avtoRep/AvtoRep";
import WhyBetter from "./whyBetter/WhyBetter";
import Benefits from "./benefits/Benefits";
import CaruselAboutUs from "./carusel/CaruselAboutUs";
import Tarifs from "./tarifs/Tarifs";
import FooterInfo from "./footerinfo/FooterInfo";
import Footer from "./footer/Footer";

export default function Mainpage() {
  return (
    <div className="mainWrapper">
      <div className="mainContainer">
        <NavBar />
        <Home />
        <HowWork />
        <AvtoRep />
        <WhyBetter />
        <Benefits />
        <CaruselAboutUs />
        <Tarifs />
        <FooterInfo />
        <Footer />
      </div>
    </div>
  );
}
