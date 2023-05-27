// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Typography } from "@mui/material";

const Information = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>Information</Typography>

      <Box sx={styles.innerContainer}>
        <Box sx={styles.titleWrapper}>
          <Typography sx={styles.blog}>Blog</Typography>
          <Typography sx={styles.titles}>About Us</Typography>
        </Box>
        <Box sx={styles.titleWrapper}>
          <Typography sx={styles.titles}>Privacy Policy</Typography>
          <Typography sx={styles.titles}>Terms & Conditions</Typography>
        </Box>
        <Box sx={styles.titleWrapper}>
          <Typography sx={styles.titles}>FAQ</Typography>
          <Typography sx={styles.titles}>Affiliate</Typography>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    mx: {
      xs: 3,
      sm: 5,
      md: 5,
      lg: 25,
    },
    mt: 4,
  },
  title: {
    color: "#FFF",
    textTransform: "uppercase",
    fontWeight: 900,
    display: { xs: "block", sm: "none" },
    mb: 2,
  },
  blog: {
    display: { xs: "block", sm: "none" },
    fontSize: "12px",
    color: "#FFF",
    cursor: "pointer",
  },
  innerContainer: {
    display: "flex",
    gap: 5,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    gap: { xs: 1, sm: 5 },
  },
  titles: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    gap: { xs: 1, sm: 5 },
    cursor: "pointer",
    color: "#FFF",
    fontSize: 12,
  },
};

export default Information;
