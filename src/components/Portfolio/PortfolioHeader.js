import React from 'react';
import { Grid, makeStyles, Paper } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  portfolioHeaderContainer: {
    background:
      'url(https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)',
    backgroundPosition: 'center',
    backgroundColor: 'black',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  portfolioHeader: {
    backgroundColor: 'rgba(10,32,68,0.7)',
    padding: '37px ',
    color: 'white',
    textAlign: 'center',
  },
}));
const portfolioHeader = () => {
  const { root, portfolioHeaderContainer, portfolioHeader } = styles();

  return (
    <Box
      className={portfolioHeaderContainer}
      style={{ backgroundColor: '#cfe8fc', height: '15vh' }}
      container
    >
      <Box>
        <Box className={''}>
          <Typography className={portfolioHeader} variant="h2">
            Portfolio
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default portfolioHeader;
