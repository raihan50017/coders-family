import { Box } from "@material-ui/core";
import React from "react";
import Header2 from "../../shared/header/Header2";
import Footer from "../../shared/footer/Footer";
import OurServiceBanner from "./OurServiceBanner";
import OurItServices from "./OurItServices";
import NeedConsultation from "./NeedConsultation";
import OurPricing from "./OurPricing";

const OurServices = () => {
  return (
    <React.Fragment>
      <Box>
        <Header2></Header2>
        <Box style={{ marginTop: "100px" }}>
          <OurServiceBanner></OurServiceBanner>
        </Box>
        <Box>
          <OurItServices></OurItServices>
        </Box>
        <Box>
          <OurPricing></OurPricing>
        </Box>
        <Box>
          <NeedConsultation></NeedConsultation>
        </Box>
        <Footer></Footer>
      </Box>
    </React.Fragment>
  );
};

export default OurServices;
