import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Header2 from '../shared/header/Header2';
import Footer from '../shared/footer/Footer';

import PortfolioHeader from './PortfolioHeader';
import PortfolioBox from './PortfolioBox';
import PortfolioSlider from './PortfolioSlider';

const Portfolio = () => {
  return (
    <React.Fragment>
      <Header2></Header2>
      <Box style={{ marginTop: '70px' }}>
        <PortfolioHeader />
      </Box>
      <Box>
        <PortfolioBox />
      </Box>
      <Box style={{ marginTop: '50px' }}>
        <PortfolioSlider />
      </Box>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Portfolio;
