import React from "react";
import { Box, Button, Typography, makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  contactPage: {
    padding: "60px 0px",
    minHeight: "100vh",
  },
  contactButton: {
    display: "inline-block",
    backgroundColor: "rgba(0,0,0,.04)",
    textTransform: "uppercase",
    padding: "8px 10px",
    fontWeight: "600",
    fontSize: "15px",
    color: "#333",
    letterSpacing: "0",
    marginBottom: "15px",
  },
}));

const ProtfolioContact = () => {
  const { contactPage, contactButton } = styles();
  return (
    <React.Fragment>
      <Box className={contactPage}>
        <Box>
          <Typography
            className={contactButton}
            variantMapping={{ p: "p" }}
            variant="p"
          >
            CONTACT
          </Typography>
          <Typography
            style={{
              fontWeight: "800",
              fontFamily: "Montserrat",
              fontSize: "30px",
              lineHeight: "1.2",
              color: "#000",
            }}
            variant="h3"
          >
            Get in Touch
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ProtfolioContact;
