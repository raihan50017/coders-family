import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const styles = makeStyles((theme) => ({
  footerContainer: {
    paddingLeft: "79px",
    paddingRight: "79px",
    paddingTop: "45px",
    paddingBottom: "54px",
  },
  footerLogo: {
    color: "#82B440",
    textAlign: "left",
    fontFamily: "Work Sans, sans-serif",
    fontWeight: "600",
  },
  footerSocial: {
    marginLeft: "-12px",
  },
  followUs: {
    fontSize: "14px",
    marginTop: "14px",
  },
  footerMenu: {
    fontSize: "16px",
    marginTop: "12px",
    fontWeight: "500",
    "& a": {
      paddingBottom: "8px",
      display: "block",
      color: "#627792",
    },
  },
}));

const Footer = () => {
  const { footerContainer, footerLogo, footerSocial, followUs, footerMenu } =
    styles();
  return (
    <React.Fragment>
      <Box className={footerContainer}>
        <Grid container>
          <Grid xs={12} md={3}>
            <Typography className={footerLogo} variant="h6">
              CODERS FAMILY
            </Typography>
            <Typography className={followUs} variant="h6">
              Follow Us:
            </Typography>
            <Box className={footerSocial}>
              <IconButton>
                <YouTubeIcon style={{ color: "red" }}></YouTubeIcon>
              </IconButton>
              <IconButton>
                <FacebookIcon style={{ color: "#3B5295" }}></FacebookIcon>
              </IconButton>
              <IconButton>
                <LinkedInIcon style={{ color: "#0172B2" }}></LinkedInIcon>
              </IconButton>
              <IconButton>
                <TwitterIcon style={{ color: "#1DA1F2" }}></TwitterIcon>
              </IconButton>
              <IconButton>
                <InstagramIcon style={{ color: "#8134AF" }}></InstagramIcon>
              </IconButton>
            </Box>
          </Grid>
          <Grid xs={12} md={3}>
            <Typography style={{ color: "#0e2b5c" }} variant="h6">
              Company
            </Typography>
            <Box className={footerMenu}>
              <Typography variantMapping={{ a: "a" }} variant="a">
                About
              </Typography>
              <Typography variantMapping={{ a: "a" }} variant="a">
                Our Team
              </Typography>
              <Typography variantMapping={{ a: "a" }} variant="a">
                Our Blogs
              </Typography>
              <Typography variantMapping={{ a: "a" }} variant="a">
                Careers
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={3}>
            <Typography style={{ color: "#0e2b5c" }} variant="h6">
              Supports
            </Typography>
            <Box className={footerMenu}>
              <Typography variantMapping={{ a: "a" }} variant="a">
                Help & Faq
              </Typography>
              <Typography variantMapping={{ a: "a" }} variant="a">
                Locations
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={3}>
            <Typography style={{ color: "#0e2b5c" }} variant="h6">
              Our Facebook Page
            </Typography>
            <Box style={{ marginTop: "12px" }}>
              <div
                class="fb-page"
                data-href="https://www.facebook.com/Ambition-Academic-Care-235227097083303/"
                data-tabs=""
                data-width=""
                data-height=""
                data-small-header="false"
                data-adapt-container-width="false"
                data-hide-cover="true"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/Ambition-Academic-Care-235227097083303/"
                  class="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/Ambition-Academic-Care-235227097083303/">
                    Ambition Academic Care
                  </a>
                </blockquote>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
