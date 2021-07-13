import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import Zoom from "react-reveal/Zoom";
import { Box, makeStyles, Typography } from "@material-ui/core";

// import Swiper core and required modules
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

const styles = makeStyles((theme) => ({
  swiperContainer: {
    width: "100%",
    maxHeight: "600px",
    "& .swiper-button-prev": {
      backgroundColor: "black",
      left: "-60px",
      width: "60px",
      height: "60px",
      transition: "all .3s linear",
      borderRadius: "0px 30px 30px 0px",
      "&:hover": {
        backgroundColor: "white",
      },
    },
    "& .swiper-button-next": {
      backgroundColor: "black",
      right: "-60px",
      width: "60px",
      height: "60px",
      transition: "all .3s linear",
      borderRadius: "30px 0px 0px 30px",
      "&:hover": {
        backgroundColor: "white",
      },
    },
    "&:hover": {
      "& .swiper-button-prev": {
        display: "flex",
        left: "0px",
      },
      "& .swiper-button-next": {
        display: "flex",
        right: "0px",
      },
    },
  },
  swiperSlide: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
  },
  swiperSlideContent: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "100%",
    bootom: "0",
    color: "white",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "150px",
    backgroundColor: "rgba(0, 0, 0, .4)",
    "& h2": {
      whiteSpace: "nowrap",
      fontSize: "60px",
      lineHeight: "80px",
      fontWeight: "400",
      color: "rgb(255, 255, 255)",
      visibility: "inherit",
      transition: "none 0s ease 0s",
      textAlign: "inherit",
    },
    "& h1": {
      whiteSpace: "nowrap",
      fontSize: "112px",
      lineHeight: "128px",
      fontWeight: "400",
      color: "rgb(255, 255, 255)",
      letterSpacing: "0px",
      visibility: "inherit",
      transition: "none 0s ease 0s",
      textAlign: "inherit",
    },
  },
  swiperSlideImg: {
    display: "block",
    width: "100%",
  },
}));

const OurServiceBanner = () => {
  const { swiperContainer, swiperSlide, swiperSlideImg, swiperSlideContent } =
    styles();

  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className={swiperContainer}
      >
        <SwiperSlide className={swiperSlide}>
          <img
            alt=""
            className={swiperSlideImg}
            src="../../images/digital-marketing-bg.jpg"
          />
          <Box className={swiperSlideContent}>
            <Box>
              <Zoom top cascade>
                <Typography variant="h2">Digital</Typography>
                <Typography variant="h1">Marketing</Typography>
              </Zoom>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide className={swiperSlide}>
          <img
            className={swiperSlideImg}
            alt=""
            src="../../images/graphics-design-bg.jpg"
          />
          <Box className={swiperSlideContent}>
            <Box>
              <Zoom top cascade>
                <Typography variant="h2">Graphics</Typography>
                <Typography variant="h1">Design</Typography>
              </Zoom>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide className={swiperSlide}>
          <img
            className={swiperSlideImg}
            alt=""
            src="../../images/web-development-bg.jpg"
          />
          <Box className={swiperSlideContent}>
            <Box>
              <Zoom top cascade>
                <Typography variant="h2">Web</Typography>
                <Typography variant="h1">Development</Typography>
              </Zoom>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide className={swiperSlide}>
          <img
            className={swiperSlideImg}
            alt=""
            src="../../images/marketing-consultation-bg.jpg"
          />
          <Box className={swiperSlideContent}>
            <Box>
              <Zoom top cascade>
                <Typography variant="h2">Marketing</Typography>
                <Typography variant="h1">Consultation</Typography>
              </Zoom>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default OurServiceBanner;
