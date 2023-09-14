import React from "react";
import NavbarComp from "../NavbarComp";
import HeroSection from "./HeroSection";
import Customersection from "./Customersection";
import FooterComp from "../FooterComp";
const HomePage = () => {
  return (
    <>
      <NavbarComp />
      <HeroSection />
      <Customersection />
      <FooterComp />
    </>
  );
};

export default HomePage;
