import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {
  Box,
  Button,
  Container,
  Drawer,
  fade,
  IconButton,
  Link,
  makeStyles,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "white" : "white",
      color: trigger ? "rgba(0,0,0,.7)" : "rgba(0,0,0,.7)",
      transition: trigger ? "0.5s" : "0.5s",
      transform: trigger ? "scale(1)" : "scale(1.05)",
    },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

//Appbar content

const headersData = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "What We Do",
    href: "/what-we-do",
  },
  {
    label: "OUR SERVICES",
    href: "our-services",
  },
  {
    label: "PROTFOLIO",
    href: "#protfolio",
  },
  {
    label: "CONTACT",
    href: "#contact",
  },
];

const useStyles = makeStyles((theme) => ({
  header: {
    paddingRight: "79px",
    paddingLeft: "79px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    //color: "#FFFEFE",
    color: "#82B440",
    textAlign: "left",
    display: "ilfine-block",
  },
  menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: "15px",
    padding: "20px 26px",
    textDecoration: "none",
    position: "relative",
    borderTop: "1px solid #ddd",
    "&::before": {
      content: '""',
      height: "3px",
      width: "0",
      backgroundColor: "#29abe2",
      right: "0",
      top: "-2px",
      position: "absolute",
      transition: "width .5s cubic-bezier(.25,.8,.25,1) 0s",
    },
    "&:hover": {
      "&::before": {
        content: '""',
        height: "3px",
        width: "100%",
        backgroundColor: "#29abe2",
        left: "0",
        top: "-2px",
        position: "absolute",
      },
    },
  },
  toolbar: {
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  widget: {
    color: "#627792",
    fontSize: "15px",
    textAlign: "center",
    padding: "15px 0px",
    "& a": {
      cursor: "pointer",
      fontWeight: "600",
    },
  },
  haveAnyQuestions: {
    color: "#0e2b5c",
    borderBottom: "1px dotted rgba(0, 0, 0, 0.5)",
    fontSize: "15px",
  },
  homeBody: {
    marginTop: "-64px",
  },
  headerQuestion: {
    display: "flex",
    alignItems: "center",
  },
  headerSearch: {
    // borderLeft: "1px solid #ddd",
    // borderRadius: "0px",
    // transform: "all .2s ease",
    position: "absolute",
    right: "0",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  },
  inputRoot: {
    color: "inherit",
    paddingRight: "0",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    //vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    //transition: theme.transitions.create("width"),
    transition: "all .6s ease",
    width: "100%",
    borderLeft: "1px solid #ddd",
    [theme.breakpoints.up("sm")]: {
      width: "0",
      "&:focus": {
        background: "white",
        width: "24ch",
        border: "1px solid #ddd",
        boxShadow: "0 2px 4px rgb(0 0 0 / 6%)",
      },
    },
  },
}));

export default function Header2(props) {
  const {
    header,
    logo,
    menuButton,
    toolbar,
    drawerContainer,
    homeBody,
    menu,
    widget,
    haveAnyQuestions,
    headerQuestion,
    headerSearch,
    searchIcon,
    inputRoot,
    inputInput,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <Box>
          <Typography
            className={widget}
            variantMapping={{ p: "p" }}
            variant="p"
          >
            {/* <Typography variantMapping={{ a: "a" }} variant="a">
              Now Hiring:
            </Typography>{" "} */}
            If you can think it we can web it
          </Typography>
          <Box className={menu}>{getMenuButtons()}</Box>
        </Box>
        <Box className={headerQuestion}>
          <img
            style={{ marginRight: "13px" }}
            src="/../images/download.webp"
            alt="chat"
          ></img>
          <Typography
            style={{ marginRight: "45px" }}
            className={haveAnyQuestions}
            variantMapping={{ a: "a" }}
            variant="a"
          >
            Have any questions?
          </Typography>
          <Box className={headerSearch}>
            <Box className={searchIcon}>
              <SearchIcon />
            </Box>
            <InputBase
              classes={{
                root: inputRoot,
                input: inputInput,
              }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Box>
          {/* <IconButton className={headerSearch}>
            <SearchIcon></SearchIcon>
          </IconButton> */}
        </Box>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <RouterLink
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </RouterLink>
      );
    });
  };

  const femmecubatorLogo = (
    <img style={{ maxWidth: "100px" }} alt="" src="../../brand-logo.png"></img>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Typography
          variantMapping={{ a: "a" }}
          variant="a"
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Typography>
      );
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={header}>
          {mobileView ? displayMobile() : displayDesktop()}
          {/* <Toolbar>
            <Typography variant="h6">MOON</Typography>
          </Toolbar> */}
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
