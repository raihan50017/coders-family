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
    color: "white",
    display: "flex",
    alignItems: "center",
    height: "600px",
    padding: "0px 60px",
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

const HomeBanner = () => {
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
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
          <Box className={swiperSlideContent}>
            <Box>
              <Zoom top cascade>
                <Typography variant="h2">reach</Typography>
                <Typography variant="h1">your audience</Typography>
                <Typography variant="h1">effectively.</Typography>
              </Zoom>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide className={swiperSlide}>
          <img
            className={swiperSlideImg}
            alt=""
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
          <Box className={swiperSlideContent}>
            <Box>
              <Zoom top cascade>
                <Typography variant="h2">adaptability</Typography>
                <Typography variant="h1">to new</Typography>
                <Typography variant="h1">techonology.</Typography>
              </Zoom>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide className={swiperSlide}>
          <img
            className={swiperSlideImg}
            alt=""
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
          <Box className={swiperSlideContent}>
            <Box>
              <Zoom top cascade>
                <Typography variant="h2">creativity</Typography>
                <Typography variant="h1">in content</Typography>
                <Typography variant="h1">creation.</Typography>
              </Zoom>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeBanner;
