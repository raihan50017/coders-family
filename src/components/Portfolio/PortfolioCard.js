import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const PortfolioCard = ({ photoUrl, text, description }) => {
  const { root, media } = useStyles();
  return (
    <div>
      <Card className={root}>
        <CardActionArea>
          <CardMedia
            className={media}
            image={photoUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography>{text}</Typography>
            <Typography color="textSecondary" component="p" variant="body2">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default PortfolioCard;
