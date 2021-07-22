import { Box, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const styles = makeStyles((theme) => ({
  ourValuesContainer: {
    background:
      'black url(https://cdn.shortpixel.ai/spai/q_lossy+ret_img/https://www.werbackspace.com/wp-content/uploads/2019/07/new-york-383945.jpg?id=2979)',
    backgroundPosition: 'center',
    backgroundColor: 'black',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  ourValuesInner: {
    backgroundColor: 'rgba(10,32,68,0.7)',
    padding: '100px 79px',
    color: 'white',
    textAlign: 'center',
  },
  ourValuesHeading: {
    fontWeight: '500',
    fontSize: '1.875rem',
    lineHeight: '1.2em',
    marginTop: '6px',
    textAlign: 'center',
  },
  swiperSlide: {
    fontSize: '6rem',
    fontWeight: '700',
  },
  ourValuesComment: {
    fontSize: '1.35rem',
    color: '#ffffff',
    textAlign: 'center',
  },
  swiper: {
    marginTop: '10px',
  },
}));

const OurValues = () => {
  const {
    ourValuesContainer,
    ourValuesInner,
    ourValuesHeading,
    swiperSlide,
    ourValuesComment,
    swiper,
  } = styles();
  return (
    <Box className={ourValuesContainer}>
      <Box className={ourValuesInner}>
        <Typography className={ourValuesHeading} variant="h2">
          Our Values
        </Typography>
        <Box className={swiper}>
          <Swiper
            loop={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide className={swiperSlide}>
              <Typography variant="h1">COMMITMENT</Typography>
            </SwiperSlide>
            <SwiperSlide>
              <Typography variant="h1">INNOVATION</Typography>
            </SwiperSlide>
            <SwiperSlide>
              <Typography variant="h1">REPUTATION</Typography>
            </SwiperSlide>
            <SwiperSlide>
              <Typography variant="h1">EXCELLENCE</Typography>
            </SwiperSlide>
          </Swiper>
        </Box>
        <Typography className={ourValuesComment} variant="h4">
          These values give us the foundations we need.
        </Typography>
      </Box>
    </Box>
  );
};

export default OurValues;
