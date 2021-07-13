import { Container } from "@material-ui/core";
import React from "react";
import Header2 from "../../shared/header/Header2";
import HomeBanner from "./HomeBanner";
import OurCompany from "./OurCompany";
import OurOperation from "./OurOperation";
import OurGalllery from "./OurGallery";
import OurValues from "./OurValues";
import Footer from "../../shared/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header2></Header2>
      <p style={{ marginTop: "115px" }}></p>
      <HomeBanner></HomeBanner>
      <OurCompany></OurCompany>
      <OurOperation></OurOperation>
      <OurGalllery></OurGalllery>
      <OurValues></OurValues>
      <Footer></Footer>
    </div>
  );
};

export default Home;
