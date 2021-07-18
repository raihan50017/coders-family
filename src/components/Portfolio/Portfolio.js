import React from 'react';
import { Box } from '@material-ui/core';
import Header2 from '../shared/header/Header2';
import Footer from '../shared/footer/Footer';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  header: {
    marginTop: '100px',
  },
});
const Portfolio = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header2></Header2>
      <Box style={{ marginTop: '100px' }}>
        <h1>This is text</h1>
        <Footer></Footer>
      </Box>
    </React.Fragment>
  );
};

export default Portfolio;
