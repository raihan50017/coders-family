import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import ProfileSidebar from "./ProfileSidebar";

const styles = makeStyles((theme) => ({
  pageContainer: {
    backgroundColor: "#f8f8f8",
    height: "100%",
    borderLeft: "1px solid #ddd",
    marginLeft: "400px",
  },
  protfolioPage: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const Profile = ({ render }) => {
  const { protfolioPage, pageContainer } = styles();

  return (
    <React.Fragment>
      <Box>
        <Box>
          <Box>
            <ProfileSidebar></ProfileSidebar>
          </Box>
          <Box>
            <Box className={pageContainer}>
              <Box className={protfolioPage}>
                <Box>{render()}</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Profile;
