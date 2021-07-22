import React from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import ServiceCard from './ServiceCard';

const serviceData = [
  {
    id: 1,
    image: '../../../images/services/digital-media.webp',
    title: 'Digital Media',
    description:
      'We are an online media engaged in producing knowledge-based video content.',
  },
  {
    id: 2,
    image: '../../../images/services/digital-marketing.webp',
    title: 'Digital Marketing',
    description:
      'We are an online media engaged in producing knowledge-based video content.',
  },
  {
    id: 3,
    image: '../../../images/services/influence-marketing.webp',
    title: 'Influence Marketing',
    description:
      'We are an online media engaged in producing knowledge-based video content.',
  },
  {
    id: 4,
    image: '../../../images/services/content-writing.webp',
    title: 'Content Writting',
    description:
      'We are an online media engaged in producing knowledge-based video content.',
  },
  {
    id: 5,
    image: '../../../images/services/graphic-design.webp',
    title: 'Graphic Design',
    description:
      'We are an online media engaged in producing knowledge-based video content.',
  },
  {
    id: 6,
    image: '../../../images/services/video-production.webp',
    title: 'Video Production',
    description:
      'We are an online media engaged in producing knowledge-based video content.',
  },
];

const styles = makeStyles((theme) => ({
  ourOperation: {
    paddingLeft: '79px',
    paddingRight: '79px',
    paddingTop: '40px',
    paddingBottom: '40px',
  },
  operationTitle: {
    fontSize: '10px',
    color: '#627792',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '4px',
    fontWeight: '500',
  },
  operationHeading: {
    '& h3': {
      fontWeight: '500',
      color: '#0e2b5c',
      fontSize: '1.875rem',
      lineHeight: '1.2em',
      marginTop: '6px',
      textAlign: 'center',
    },
  },
  ourService: {
    marginTop: '65px',
  },
}));

const OurOperation = () => {
  const { operationTitle, ourOperation, operationHeading, ourService } =
    styles();

  return (
    <React.Fragment>
      <Box className={ourOperation}>
        <Typography className={operationTitle} variant="h6">
          <Typography variantMapping={{ a: 'a' }} variant="a">
            our operation
          </Typography>
        </Typography>
        <Box className={operationHeading}>
          <Typography variant="h3">We Plan, We Execute, We Promote</Typography>
        </Box>
        <Box className={ourService}>
          <Grid container>
            {serviceData.map((item) => (
              <ServiceCard key={item.id} serviceData={item}></ServiceCard>
            ))}
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default OurOperation;
