import React from "react";
import {
  Box,
  Grid,
  makeStyles,
  Typography,
  IconButton,
} from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Fade from "react-reveal/Fade";

const styles = makeStyles((theme) => ({
  homePage: {
    paddingTop: "30%",
    minHeight: "100vh",
  },
  avatar: {},
  avatarImage: {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    backgroundImage: `url(${"https://i.ibb.co/smw4hh3/raihan.jpg"})`,
    backgroundSize: "cover",
    boxShadow: "0 0 20px rgb(0 0 0 / 12%)",
    transition: "all .3s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  details: {
    marginLeft: "80px",
  },
  name: {
    fontSize: "55px",
    fontWeight: "800",
    textTransform: "uppercase",
    marginBottom: "19px",
    lineHeight: "1.2",
    color: "#000",
  },
  job: {
    fontStyle: "italic",
    fontWeight: "500",
    maxWidth: "450px",
    marginBottom: "30px",
    color: "#767676",
  },
  socialLink: {
    marginLeft: "-12px",
  },
}));

const ProtfolioHome = () => {
  const { avatar, avatarImage, details, name, job, socialLink, homePage } =
    styles();

  return (
    <React.Fragment>
      <Fade left>
        <Box className={homePage}>
          <Grid container>
            <Grid md={4}>
              <Box className={avatar}>
                <Box className={avatarImage}></Box>
              </Box>
            </Grid>
            <Grid md={8}>
              <Box className={details}>
                <Typography className={name} variant="h3">
                  MD. Abu Raihan
                </Typography>
                <Typography
                  className={job}
                  variantMapping={{ p: "p" }}
                  variant="p"
                >
                  Creative Photographer based in New York and happy to travel
                  all over Europe to capture photos.
                </Typography>
                <Box className={socialLink}>
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
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </React.Fragment>
  );
};

export default ProtfolioHome;
