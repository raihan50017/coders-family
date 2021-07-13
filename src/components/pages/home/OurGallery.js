import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import { Box, makeStyles, Typography } from "@material-ui/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const styles = makeStyles((theme) => ({
  ourGalleryContainer: {
    paddingLeft: "79px",
    paddingRight: "79px",
    paddingTop: "40px",
    paddingBottom: "40px",
  },
  swiperContainer: {
    width: "100%",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  swiperSlide: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "300px",
    height: "300px",
    "& img": {
      display: "block",
      width: "100%",
    },
  },
  galleryHeading: {
    "& h2": {
      fontWeight: "500",
      color: "#0e2b5c",
      fontSize: "1.875rem",
      lineHeight: "1.2em",
      marginTop: "6px",
      textAlign: "center",
      marginBottom: "16px",
    },
  },
}));

const OurGalllery = () => {
  const { swiperContainer, swiperSlide, ourGalleryContainer, galleryHeading } =
    styles();

  return (
    <>
      <Box className={ourGalleryContainer}>
        <Box className={galleryHeading}>
          <Typography variant="h2">Our Gallery</Typography>
        </Box>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className={`${swiperContainer} mySwiper`}
        >
          <SwiperSlide className={swiperSlide}>
            <img alt="" src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide className={swiperSlide}>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide className={swiperSlide}>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide className={swiperSlide}>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide className={swiperSlide}>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide className={swiperSlide}>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide className={swiperSlide}>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide className={swiperSlide}>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide className={swiperSlide}>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default OurGalllery;
