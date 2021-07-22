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
    color: '#fff',
    '& :hover': {
      CardInfo: {
        // display: 'none',
      },
    },
  },
  media: {
    height: 300,
  },
  cardStyle: {
    width: '384px',
    margin: '0 auto',
  },
  CardInfo: {
    padding: '2rem',
    background: 'rgb(0, 0, 0,0.1)',
    display: 'block',
    marginTop: '5.5rem',
    position: 'absolute',
    marginLeft: '5rem',
    zIndex: '999',
    '& :hover': {
      zIndex: '999',
    },
  },
});
const PortfolioCard = ({ photoUrl, text, description }) => {
  const { card, media, cardStyle, CardInfo } = useStyles();
  return (
    <Box className={card}>
      <Card className={cardStyle}>
        <Box className={CardInfo}>
          <Typography variant="h6" color="textSecondary">
            {' '}
            name
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {' '}
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
