import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Fade from "react-reveal/Fade";
import AboutProgress from "./AboutProgress";

const styles = makeStyles((theme) => ({
  aboutPage: {
    paddingTop: "10%",
    paddingBottom: "10%",
  },
  personImage: {
    "& img": {
      width: "100%",
      boxShadow: "0 0 20px rgb(0 0 0 / 12%)",
    },
  },
  name: {
    fontWeight: "500",
    fontSize: "22px",
    marginBottom: "26px",
    lineHeight: "1.2",
    color: "#000",
    marginTop: "35px",
  },
  description: {
    marginBottom: "35px",
    fontSize: "15px",
    lineHeight: "30px",
    letterSpacing: ".5px",
    wordWrap: "break-word",
    fontWeight: "400",
  },
  bio: {
    marginLeft: "40px",
    "& ul": {
      listStyleType: "none",
      "& li": {
        fontSize: "15px",
        lineHeight: "30px",
        letterSpacing: ".5px",
        wordWrap: "break-word",
        fontWeight: "400",
        "& p": {
          minWidth: "90px",
          display: "inline-block",
          fontWeight: "700",
          color: "#000",
        },
      },
    },
  },
  skill: {
    marginTop: "50px",
  },
  skillHeading: {
    marginBottom: "15px",
    fontSize: "22px",
    fontWeight: "500",
  },
}));

const ProtfolioAbout = () => {
  const {
    personImage,
    aboutPage,
    description,
    name,
    bio,
    skill,
    skillHeading,
  } = styles();

  return (
    <React.Fragment>
      <Fade right>
        <Box className={aboutPage}>
          <Box className={personImage}>
            <img src="../../images/profileimages/raihan .jpg" alt=""></img>
          </Box>
          <Box>
            <Typography className={name} variant="h3">
              Md. Abu Raihan
            </Typography>
            <Box>
              <Grid container>
                <Grid md={7}>
                  <Box>
                    <Typography
                      className={description}
                      variantMapping={{ p: "p" }}
                      variant="p"
                    >
                      Hello, I am a creative photographer based in New York and
                      happy to travel all over Europe to capture your big day in
                      candid and authentic photos. I will create a lasting
                      memory of the people.
                    </Typography>
                    <Button color="primary" variant="contained">
                      read More
                    </Button>
                  </Box>
                  <Box></Box>
                </Grid>
                <Grid md={5}>
                  <Box className={bio}>
                    <Typography variantMapping={{ ul: "ul" }} variant="ul">
                      <Typography variantMapping={{ li: "li" }} variant="li">
                        <Typography variantMapping={{ p: "p" }} variant="p">
                          Birthday:
                        </Typography>
                        01.07.1990
                      </Typography>
                      <Typography variantMapping={{ li: "li" }} variant="li">
                        <Typography variantMapping={{ p: "p" }} variant="p">
                          Age:
                        </Typography>
                        31
                      </Typography>
                      <Typography variantMapping={{ li: "li" }} variant="li">
                        <Typography variantMapping={{ p: "p" }} variant="p">
                          Address:
                        </Typography>
                        Ave 11, New York, USA
                      </Typography>
                      <Typography variantMapping={{ li: "li" }} variant="li">
                        <Typography variantMapping={{ p: "p" }} variant="p">
                          Email:
                        </Typography>
                        aburaihan50017@gmail.com
                      </Typography>
                      <Typography variantMapping={{ li: "li" }} variant="li">
                        <Typography variantMapping={{ p: "p" }} variant="p">
                          Phone:
                        </Typography>
                        +880 01726426154
                      </Typography>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box className={skill}>
            <Typography className={skillHeading} variant="h3">
              My Skills
            </Typography>
            <AboutProgress
              color="primary"
              language="HTML"
              progress="95"
            ></AboutProgress>
            <br></br>
            <AboutProgress
              color="secondary"
              language="CSS"
              progress="95"
            ></AboutProgress>
            <br></br>
            <AboutProgress
              color="primary"
              language="JavaScript"
              progress="85"
            ></AboutProgress>
            <br></br>
            <AboutProgress
              color="secondary"
              language="React js"
              progress="80"
            ></AboutProgress>
            <br></br>
            <AboutProgress
              color="primary"
              language="Node js"
              progress="80"
            ></AboutProgress>
          </Box>
        </Box>
      </Fade>
    </React.Fragment>
  );
};

export default ProtfolioAbout;
