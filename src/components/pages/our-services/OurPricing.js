import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const styles = makeStyles((theme) => ({
  "@keyframes Gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPsition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
  "@keyframes cube": {
    from: {
      transform: "scale(0) rotate(0deg) translate(-50%, -50%)",
      opacity: "1",
    },
    to: {
      transform: "scale(20) rotate(960deg) translate(-50%, -50%)",
      opacity: "0",
    },
  },

  ourPricingContainer: {
    position: "relative",
  },
  ourPricingMain: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  },
  pricingHeading: {
    "& h2": {
      fontWeight: "500",
      color: "#0e2b5c",
      fontSize: "1.875rem",
      lineHeight: "1.2em",
      marginTop: "60px",
      textAlign: "center",
      marginBottom: "16px",
    },
  },
  pricingCardContainer: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "90px",
  },
  pricingCard: {
    padding: "10px",
    transition: "280ms ease-in",
    "&:hover": {
      transform: "translateY(-20px)",
      "& .pricingCardInner": {
        borderStyle: "solid",
        borderWidth: "4px 0px 0px 0px",
        borderColor: "#8918FF",
        boxShadow: "0px 0px 38px 0px rgb(0 0 0 / 5%)",
      },
    },
  },
  pricingCardInner: {
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: "4px 0px 0px 0px",
    borderColor: "#FFFFFF",
    borderRadius: "4px 4px 4px 4px",
    height: "100%",
    boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 5%)",
    transition:
      "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
    margin: "0px 10px 0px 5px",
    padding: "65px 40px 65px 40px",
  },
  pricingCardType: {
    "& h3": {
      color: "#8918FF",
      fontSize: "16px",
      fontWeight: "500",
      textTransform: "uppercase",
      textAlign: "center",
      marginBottom: "15px",
    },
  },
  pricingPrice: {
    "& h2": {
      margin: "0",
      marginBottom: "15px",
      color: "#444444",
      fontSize: "72px",
      fontWeight: "600",
      textAlign: "center",
    },
  },
  pricingPeriod: {
    "& h2": {
      color: "#686868",
      fontSize: "15px",
      fontWeight: "600",
      letterSpacing: "0.5px",
      margin: "0",
      marginBottom: "15px",
    },
  },
  pricingOn: {
    margin: "15px 0px 15px 0px",
    "& ul": {
      listStyleType: "none",
      textAlign: "center",
      "& li": {
        paddingBottom: "calc(35px/2)",
        fontSize: "15px",
        color: "rgba(96,96,96,0.82)",
        fontWeight: "400",
        position: "relative",
        borderBottom: "1px solid rgba(206,206,206,0.33)",
        paddingTop: "15px",
      },
      "& li:last-child": {
        border: "none",
      },
    },
  },
  pricingButton: {
    textAlign: "center",
  },
  background: {
    background: "linear-gradient(#fff, #fff, #fff, #fff)",
    backgroundSize: "400% 400%",
    animation: "$Gradient 15s ease infinite",
    position: "relative",
    height: "150vh",
    width: "100%",
    overflow: "hidden",
    padding: "0",
    margin: "0px",
    "& .cube": {
      position: "absolute",
      top: "80vh",
      left: "45vw",
      width: "10px",
      height: "10px",
      border: "solid 1px #171C44",
      transformOrigin: "top left",
      transform: "scale(0) rotate(0deg) translate(-50%, -50%)",
      animation: "$cube 12s ease-in forwards infinite",
    },
    "& .cube:nth-child(2n)": {
      borderColor: "#171C44",
    },
    "& .cube:nth-child(2)": {
      animationDelay: "1s",
      left: "25vw",
      top: "40vh",
    },
    "& .cube:nth-child(3)": {
      animationDelay: "2s",
      left: "75vw",
      top: "50vh",
    },
    "& .cube:nth-child(4)": {
      animationDelay: "2s",
      left: "90vw",
      top: "10vh",
    },
    "& .cube:nth-child(5)": {
      animationDelay: "3s",
      left: "10vw",
      top: "85vh",
    },
    "& .cube:nth-child(6)": {
      animationDelay: "1s",
      left: "50vw",
      top: "25vh",
    },
    "& .cube:nth-child(7)": {
      animationDelay: "2s",
      left: "10vw",
      top: "10vh",
    },
    "& .cube:nth-child(8)": {
      animationDelay: "4s",
      left: "10vw",
      bottom: "10vh",
    },
    "& .cube:nth-child(9)": {
      right: "10vw",
      bottom: "10vh",
    },
  },
}));

const OurPricing = () => {
  const {
    background,
    ourPricingContainer,
    ourPricingMain,
    pricingHeading,
    pricingCardContainer,
    pricingCard,
    pricingCardInner,
    pricingCardType,
    pricingPrice,
    pricingPeriod,
    pricingOn,
    pricingButton,
  } = styles();

  return (
    <Box className={ourPricingContainer}>
      <Box className={background}>
        <Box className="cube"></Box>
        <Box className="cube"></Box>
        <Box className="cube"></Box>
        <Box className="cube"></Box>
        <Box className="cube"></Box>
        <Box className="cube"></Box>
        <Box className="cube"></Box>
      </Box>
      <Box className={ourPricingMain}>
        <Box className={pricingHeading}>
          <Typography variant="h2">
            We offer our customers the best prices
          </Typography>
          <Box className={pricingCardContainer}>
            <Grid container>
              <Grid className={pricingCard} sm={12} md={4}>
                <Box className={`${pricingCardInner} pricingCardInner`}>
                  <Box>
                    <Box className={pricingCardType}>
                      <Typography variant="h3">BASIC</Typography>
                    </Box>
                    <Box className={pricingPrice}>
                      <Typography variant="h2">$133</Typography>
                    </Box>
                    <Box className={pricingPeriod}>
                      <Typography variant="h2">Monthly</Typography>
                    </Box>
                    <Box className={pricingOn}>
                      <Typography variantMapping={{ ul: "ul" }} variant="ul">
                        <Typography variantMapping={{ li: "li" }} variant="li">
                          Web Development
                        </Typography>
                        <Typography variantMapping={{ li: "li" }} variant="li">
                          Web Designing
                        </Typography>
                        <Typography variantMapping={{ li: "li" }} variant="li">
                          SEO Optimization
                        </Typography>
                        <Typography variantMapping={{ li: "li" }} variant="li">
                          Wordpress Website
                        </Typography>
                        <Typography variantMapping={{ li: "li" }} variant="li">
                          Graphics Design
                        </Typography>
                      </Typography>
                    </Box>
                    <Box className={pricingButton}>
                      <Button variant="contained" color="primary">
                        Puschase Now
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid className={pricingCard} sm={12} md={4}>
                <Box className={`${pricingCardInner} pricingCardInner`}>
                  <Box>
                    <Box className={pricingCardType}>
                      <Typography variant="h3">STANDART</Typography>
                    </Box>
                    <Box className={pricingPrice}>
                      <Typography variant="h2">$229</Typography>
                    </Box>
                    <Box className={pricingPeriod}>
                      <Typography variant="h2">Monthly</Typography>
                    </Box>
                    <Box className={pricingOn}>
                      <Typography variantMapping={{ ul: "ul" }} variant="ul">
                        <Typography variantMapping={{ li: "li" }} variant="li">
                          Web Development
                        </Typography>
                        <Typography variantMapping={{ li: "li" }} variant="li">
                          Web Designing
                        </Typography>
                        <Typography variantMapping={{ li: "li" }} variant="li">
                          SEO Optimization
                        </Typography>
                        <Typography variantMapping={{ li: "li" }} variant="li">
                          Wordpress Website
                        </Typography>
                        <Typography variantMapping={{ li: "li" }} variant="li">
                          Graphics Design
                        </Typography>
                      </Typography>
                    </Box>
                    <Box className={pricingButton}>
                      <Button variant="contained" color="primary">
                        Puschase Now
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid className={pricingCard} sm={12} md={4}>
                <Box className={`${pricingCardInner} pricingCardInner`}>
                  <Box>
                    <Box className={pricingCardType}>
                      <Typography variant="h3">PROFESSIONAL</Typography>
                    </Box>
                    <Box className={pricingPrice}>
                      <Typography variant="h2">$500</Typography>
                    </Box>
                    <Box className={pricingPeriod}>
                      <Typography variant="h2">Monthly</Typography>
                    </Box>
                    <Box className={pricingOn}>
                      <Typography variantMapping={{ ul: "ul" }} variant="ul">
                        <Typography variantMapping={{ li: "li" }} variant="li">
                          Web Development
                        </Typography>
                        <Typography variantMapping={{ li: "li" }} variant="li">
                          Web Designing
                        </Typography>
                        <Typography variantMapping={{ li: "li" }} variant="li">
                          SEO Optimization
                        </Typography>
                        <Typography variantMapping={{ li: "li" }} variant="li">
                          Wordpress Website
                        </Typography>
                        <Typography variantMapping={{ li: "li" }} variant="li">
                          Graphics Design
                        </Typography>
                      </Typography>
                    </Box>
                    <Box className={pricingButton}>
                      <Button variant="contained" color="primary">
                        Puschase Now
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurPricing;
