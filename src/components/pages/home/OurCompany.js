import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const styles = makeStyles((theme) => ({
  companyContainer: {
    backgroundColor: 'black',
    color: 'white',
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    paddingLeft: '74.5px',
    paddingRight: '74.5px',
    paddingTop: '80px',
    paddingBottom: '80px',
    '& h5': {
      fontSize: '20px',
      color: '#1dc2ef',
      textAlign: 'left',
      textTransform: 'uppercase',
      letterSpacing: '4px',
      fontWeight: '500',
      lineHeight: '1.3em',
      marginBottom: '8px',
    },
    '& h6': {
      fontSize: '20px',
      color: '#ffffff',
      textAlign: 'left',
      fontWeight: '500',
      lineHeight: '1.2em',
    },
    '& p': {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.625em',
      fontStyle: 'normal',
    },
  },
}));

const OurCompany = () => {
  const { companyContainer } = styles();

  return (
    <Grid className={companyContainer} container>
      <Grid md={6} xs={12}>
        <Box>
          <Typography variant="h5">OUR COMPANY</Typography>
          <Typography variant="h6">
            CODERS FAMILY is an innovation hub specializing in content marketing
            & content creation.
          </Typography>
        </Box>
      </Grid>
      <Grid md={6} xs={12}>
        <Box>
          <Typography variantMapping={{ p: 'p' }} variant="p">
            CODERS FAMILY is a collaborative result of individuals that has been
            working with international partners across the world for several
            years in promoting their products, business through social media
            platform and affiliation.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default OurCompany;
