// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Typography } from "@mui/material";

const images = [
  {
    name: "download-ios",
    image: "/images/footer/our-app/download-ios.svg",
  },
  {
    name: "download-android",
    image: "/images/footer/our-app/download-android.svg",
  },
];

const OurApp = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>Our App</Typography>
      {images.map((item, index) => (
        <Box
          key={index}
          component="img"
          src={item.image}
          alt={item.name}
          sx={styles.image}
        />
      ))}
    </Box>
  );
};

const styles = {
  container: {
    display: { xs: "flex", sm: "initial" },
    alignItems: { xs: "center", sm: "flex-start" },
    gap: 1,
    flex: { lg: "1 0 25%" },
  },
  title: {
    color: "#FFF",
    textTransform: "uppercase",
    fontWeight: 900,
    fontSize: "14px",
    whiteSpace: "nowrap",
  },
  image: {
    width: 100,
    height: "100%",
  },
};

export default OurApp;
