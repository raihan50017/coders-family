import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
const useStyles = makeStyles({
  card: {
    textAlign: 'center',
    position: 'relative',

    '& :hover': {
      '& .card-info': {
        transform: 'scale(1)',
      },
    },
    '& h6': {
      color: '#fff',
    },
  },
  media: {
    height: 300,
  },
  cardStyle: {
    width: '384px',
    margin: '0 auto',
  },
  cardInfo: {
    position: 'absolute',
    padding: '2rem',
    background: 'rgb(0, 0, 0,0.1)',
    // display: 'none',
    transform: 'scale(0)',

    marginTop: '5.5rem',
    marginLeft: '5rem',
    zIndex: '999',
    transition: 'all .6s ease',
  },
});
const PortfolioCard = ({ photoUrl, text, description }) => {
  const { card, media, cardStyle, cardInfo } = useStyles();
  return (
    <Box className={card}>
      <Card className={cardStyle}>
        <Box className={`${cardInfo} card-info`}>
          <Typography variant="h6" color="textSecondary">
            name
          </Typography>
          <Typography variant="p" component="p">
            Short Description
          </Typography>
          <Button variant="contained" color="primary">
            Details
          </Button>
        </Box>
        <CardActionArea>
          <CardMedia
            className={media}
            image={photoUrl}
            title="Contemplative "
          />
          <CardContent>
            <Typography>{text}</Typography>
            <Typography color="textSecondary" component="p" variant="body2">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default PortfolioCard;
