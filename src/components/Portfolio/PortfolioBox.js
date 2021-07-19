import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import PortfolioCard from './PortfolioCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  media: {
    height: 140,
  },
  galleryHeading: {
    marginTop: '30px',
    fontSize: '2rem',
    fontWeight: 'bold',
    textShadow: '1px 1px #14203B',
    marginBottom: '10px',
  },
}));
const PortfolioBox = () => {
  const { root, galleryHeading } = useStyles();
  return (
    <React.Fragment className={root}>
      <Container>
        <Typography className={galleryHeading} align={'center'} variant="h2">
          {' '}
          OUR PROJECTS
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={4}>
            <PortfolioCard
              text={'Company name'}
              description={'Some Lines about the Company'}
              photoUrl={
                'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              }
            />
          </Grid>{' '}
          <Grid item xs={6} sm={4}>
            <PortfolioCard
              text={'Company name'}
              description={'Some Lines about the Company'}
              photoUrl={
                'https://images.unsplash.com/photo-1552664730-d307ca884978?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              }
            />
          </Grid>{' '}
          <Grid item xs={6} sm={4}>
            <PortfolioCard
              text={'Company name'}
              description={'Some Lines about the Company'}
              photoUrl={
                'https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80'
              }
            />
          </Grid>{' '}
          <Grid item xs={6} sm={4}>
            <PortfolioCard
              text={'Company name'}
              description={'Some Lines about the Company'}
              photoUrl={
                'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
              }
            />
          </Grid>{' '}
          <Grid item xs={6} sm={4}>
            <PortfolioCard
              text={'Company name'}
              description={'Some Lines about the Company'}
              photoUrl={
                'https://images.unsplash.com/photo-1603357465999-241beecc2629?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80'
              }
            />
          </Grid>{' '}
          <Grid item xs={6} sm={4}>
            <PortfolioCard
              text={'Company name'}
              description={'Some Lines about the Company'}
              photoUrl={
                'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              }
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default PortfolioBox;
