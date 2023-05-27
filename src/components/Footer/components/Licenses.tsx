// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Typography } from "@mui/material";

const images = [
  {
    name: "GC",
    image: "/images/footer/licenses/GC.svg",
    width: 100,
  },
  {
    name: "PAGCOR",
    image: "/images/footer/licenses/PAGCOR.svg",
    width: 100,
  },
  {
    name: "18+",
    image: "/images/footer/licenses/18+.svg",
    width: 50,
  },
];

const Licenses = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>Licenses</Typography>
      <Box sx={styles.imageWrapper}>
        {images.map((item, index) => (
          <Box
            key={index}
            component="img"
            src={item.image}
            alt={item.name}
            sx={{ ...styles.image, width: item.width }}
          />
        ))}
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    flex: { lg: "1 0 25%" },
  },
  title: {
    color: "#FFF",
    textTransform: "uppercase",
    fontWeight: 900,
    fontSize: "14px",
  },
  imageWrapper: {
    display: "flex",
    alignItems: "center",
    mt: 2,
    gap: 2,
  },
  image: {
    height: "100%",
  },
};

export default Licenses;
