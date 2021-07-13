import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  makeStyles,
} from "@material-ui/core";

const styles = makeStyles((theme) => ({
  serviceCard: {
    "&:hover": {
      "& img": {
        transform: "rotate(0.1turn)",
      },
      "& .icon-box": {
        "&:before": {
          position: "absolute",
          height: "8px",
          width: "66px",
          content: '""',
          bottom: "-15px",
          left: "50%",
          borderRadius: "100%",
          marginLeft: "-33px",
          transform: "scale(.7)",
          background: "rgba(0,0,0,.09)",
          zIndex: "99",
          transition: "transform .35s,-webkit-transform .35s",
          transitionTimingFunction: "cubic-bezier(.12,.845,.305,1)",
        },
      },
    },
  },
  iconBox: {
    margin: "40px 0 0",
    position: "relative",
    zIndex: "2",
    height: "80px",
    "&:before": {
      position: "absolute",
      height: "8px",
      width: "66px",
      content: '""',
      bottom: "-15px",
      left: "50%",
      borderRadius: "100%",
      marginLeft: "-33px",
      background: "rgba(0,0,0,.06)",
      zIndex: "99",
      transition: "transform .35s,-webkit-transform .35s",
      transitionTimingFunction: "cubic-bezier(.12,.845,.305,1)",
    },
    "& img": {
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      transition: "transform .35s,-webkit-transform .35s",
      transitionTimingFunction: "cubic-bezier(.12,.845,.305,1)",
      height: "100%",
      verticalAlign: "top",
    },
    "&::before": {
      position: "absolute",
      height: "8px",
      width: "66px",
      content: "",
      bottom: "-15px",
      left: "50%",
      borderRadius: "100%",
      marginLeft: "-33px",
      background: "rgba(0,0,0,.06)",
      zIndex: "1",
    },
  },
  cardContent: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    padding: "10%",
    height: "100%",
  },
  cardTitle: {
    fontWeight: "500",
    color: "#0e2b5c",
    fontSize: "1.25rem",
    lineHeight: "1.35em",
    textAlign: "center",
    margin: "0 0 10px 0",
  },
  cardDescription: {
    fontStyle: "normal",
    color: "#627792",
    fontSize: "1rem",
    lineHeight: "1.625em",
  },
  cardContainer: {
    padding: "10px",
  },
}));

const ServiceCard = ({ serviceData }) => {
  const {
    iconBox,
    serviceCard,
    cardContent,
    cardTitle,
    cardDescription,
    cardContainer,
  } = styles();

  return (
    <Grid xs={12} md={4}>
      <Box className={cardContainer}>
        <Card className={serviceCard}>
          <CardActionArea>
            <Box className={`${iconBox} icon-box`}>
              <img alt="" src={`${serviceData?.image}`}></img>
            </Box>
            <CardContent className={cardContent}>
              <Typography className={cardTitle} component="h4">
                {serviceData.title}
              </Typography>
              <Typography
                className={cardDescription}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                We are an online media engaged in producing knowledge-based
                video content.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Grid>
  );
};

export default ServiceCard;
