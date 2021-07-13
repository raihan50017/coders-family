import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

const styles = makeStyles((theme) => ({
  consultationContainer: {
    background: "black url(/../images/need-consultation-bg.jpg)",
    backgroundPosition: "center",
    backgroundColor: "black",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  consultationInner: {
    backgroundColor: "rgba(10,32,68,0.7)",
    padding: "120px 79px",
    color: "white",
    textAlign: "center",
  },
  consultationHeading: {
    color: "#FFF",
    fontSize: "48px",
    fontWeight: "900",
    lineHeight: "80px",
    padding: "0 0 28px 0",
  },
}));

const NeedConsultation = () => {
  const { consultationContainer, consultationInner, consultationHeading } =
    styles();
  return (
    <Box className={consultationContainer}>
      <Box className={consultationInner}>
        <Typography className={consultationHeading} variant="h2">
          NEED A CONSULTATION?
        </Typography>
        <Button variant="contained" color="primary">
          CONTACT US
        </Button>
      </Box>
    </Box>
  );
};

export default NeedConsultation;
