import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const styles = makeStyles((theme) => ({
  sidebarWrapper: {
    width: "400px",
    position: "fixed",
    left: "0",
    top: "0",
    boxSizing: "border-box",
  },
  sidebarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    left: "0",
    top: "0",
    boxSizing: "border-box",
  },
  sidebarLogo: {
    "& h4": {
      fontWeight: "700",
      letterSpacing: "3px",
    },
  },
  protfolioMenu: {
    padding: "40px 0px 50px",
    "& ul": {
      listStyleType: "none",
      "& li": {
        background: "transparent",
        border: "0",
        margin: "0",
        padding: "0",
        verticalAlign: "baseline",
        outline: "none",
        color: "#767676",
        cursor: "pointer",
        fontSize: "18px",
        lineHeight: "30px",
        fontWeight: "500",
        transition: "all .3s ease",
        "&:hover": {
          letterSpacing: "1px",
          color: "#000",
        },
        "& a": {
          textDecoration: "none",
          color: "#767676",
        },
      },
    },
  },
}));

const ProfileSidebar = () => {
  const { sidebarContainer, protfolioMenu, sidebarLogo, sidebarWrapper } =
    styles();

  return (
    <React.Fragment>
      <Box className={sidebarWrapper}>
        <Box className={sidebarContainer}>
          <Box>
            <Box className={sidebarLogo}>
              <Typography variant="h4">RAIHAN</Typography>
            </Box>
            <Box className={protfolioMenu}>
              <Typography variantMapping={{ ul: "ul" }} variant="ul">
                <Typography variantMapping={{ li: "li" }} variant="li">
                  <RouterLink to="/protfolio-home">Home</RouterLink>
                </Typography>
                <Typography variantMapping={{ li: "li" }} variant="li">
                  <RouterLink to="/protfolio-about">About</RouterLink>
                </Typography>
                <Typography variantMapping={{ li: "li" }} variant="li">
                  <RouterLink to="/protfolio-profile">Protfolio</RouterLink>
                </Typography>
                <Typography variantMapping={{ li: "li" }} variant="li">
                  <RouterLink to="/protfolio-news">News</RouterLink>
                </Typography>
                <Typography variantMapping={{ li: "li" }} variant="li">
                  <RouterLink to="/protfolio-contact">Contact</RouterLink>
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ProfileSidebar;
