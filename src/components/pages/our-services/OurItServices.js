import { Grid, Typography } from '@material-ui/core';
import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import WebIcon from '@material-ui/icons/Web';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import GroupIcon from '@material-ui/icons/Group';

const styles = makeStyles((theme) => ({
  ourItServiceContainer: {
    paddingLeft: '79px',
    paddingRight: '79px',
    paddingTop: '80px',
    paddingBottom: '40px',
  },
  ourItServiceContainerHeading: {
    '& h2': {
      fontWeight: '500',
      color: '#0e2b5c',
      fontSize: '1.875rem',
      lineHeight: '1.2em',
      marginTop: '6px',
      textAlign: 'center',
      marginBottom: '16px',
    },
  },
  serviceCard: {
    marginTop: '50px',
    marginLeft: '-10px',
    marginRight: '-10px',
  },
  serviceCardWrapper: {
    marginBottom: '10px',
  },
  serviceCardContainer: {
    padding: '10px',
  },
  serviceCardIcon: {
    fontSize: '60px',
    fontWeight: '100',
    textAlign: 'center',
    lineHeight: '1',
    color: '#7141b1',
    //color: "#A1DCFF",
  },
  serviceCardContent: {
    '& h4': {
      marginBottom: '17px',
      fontWeight: '700',
      fontSize: '20px',
      color: '#1b1d21',
    },
    '& p': {
      margin: '0 0 20px',
      fontSize: '15px',
      lineHeight: '1.5',
      color: '#777',
    },
  },
}));

const OurItServices = () => {
  const {
    ourItServiceContainer,
    ourItServiceContainerHeading,
    serviceCardContainer,
    serviceCardWrapper,
    serviceCardIcon,
    serviceCardContent,
    serviceCard,
  } = styles();

  return (
    <Box className={ourItServiceContainer}>
      <Box className={ourItServiceContainerHeading}>
        <Typography variant="h2">
          We Offer a Wide Variety of IT Services
        </Typography>
      </Box>
      <Box>
        <Grid container className={serviceCard}>
          <Grid sm={12} md={4} className={serviceCardWrapper}>
            <Box className={serviceCardContainer}>
              <Grid container>
                <Grid sm={3}>
                  <CodeIcon className={serviceCardIcon}></CodeIcon>
                </Grid>
                <Grid className={serviceCardContent} sm={9}>
                  <Typography variant="h4">Web Development</Typography>
                  <Typography variantMapping={{ p: 'p' }} variant="p">
                    We carry more than just good coding skills. Our experience
                    makes us stand out from other web development.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid sm={12} md={4}>
            <Box className={serviceCardContainer}>
              <Grid container>
                <Grid sm={3}>
                  <PhoneIphoneIcon
                    className={serviceCardIcon}
                  ></PhoneIphoneIcon>
                </Grid>
                <Grid className={serviceCardContent} sm={9}>
                  <Typography variant="h4">Mobile Development</Typography>
                  <Typography variantMapping={{ p: 'p' }} variant="p">
                    Create complex enterprise software, ensure reliable software
                    integration, modernise your legacy system.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid sm={12} md={4}>
            <Box className={serviceCardContainer}>
              <Grid container>
                <Grid sm={3}>
                  <DesktopWindowsIcon
                    className={serviceCardIcon}
                  ></DesktopWindowsIcon>
                </Grid>
                <Grid className={serviceCardContent} sm={9}>
                  <Typography variant="h4">UI/UX Design</Typography>
                  <Typography variantMapping={{ p: 'p' }} variant="p">
                    We carry more than just good coding skills. Our experience
                    makes us stand out from other web development.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid sm={12} md={4}>
            <Box className={serviceCardContainer}>
              <Grid container>
                <Grid sm={3}>
                  <WebIcon className={serviceCardIcon}></WebIcon>
                </Grid>
                <Grid className={serviceCardContent} sm={9}>
                  <Typography variant="h4">QA & Testing</Typography>
                  <Typography variantMapping={{ p: 'p' }} variant="p">
                    We carry more than just good coding skills. Our experience
                    makes us stand out from other web development.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid sm={12} md={4}>
            <Box className={serviceCardContainer}>
              <Grid container>
                <Grid sm={3}>
                  <InsertChartIcon
                    className={serviceCardIcon}
                  ></InsertChartIcon>
                </Grid>
                <Grid className={serviceCardContent} sm={9}>
                  <Typography variant="h4">IT Consultancy</Typography>
                  <Typography variantMapping={{ p: 'p' }} variant="p">
                    We carry more than just good coding skills. Our experience
                    makes us stand out from other web development.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid sm={12} md={4}>
            <Box className={serviceCardContainer}>
              <Grid container>
                <Grid sm={3}>
                  <GroupIcon className={serviceCardIcon}></GroupIcon>
                </Grid>
                <Grid className={serviceCardContent} sm={9}>
                  <Typography variant="h4">Dedicated Team</Typography>
                  <Typography variantMapping={{ p: 'p' }} variant="p">
                    We carry more than just good coding skills. Our experience
                    makes us stand out from other web development.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OurItServices;
