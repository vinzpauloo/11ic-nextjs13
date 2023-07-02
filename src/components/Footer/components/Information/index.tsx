// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Typography } from "@mui/material";

// ** Custom Component Imports
import InformationData from "./components/InformationData";
import InformationItems from "./components/InformationItems";

// =================================================================
const Information = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>Information</Typography>

      <Box sx={styles.innerContainer}>
        {InformationData().map((data, index) => (
          <InformationItems
            key={index}
            sxWrap={styles.titleWrapper}
            firstSxTitle={data.firstSxTitle}
            secondSxTitle={data.secondSxTitle}
            firstTitle={data.firstTitle}
            secondTitle={data.secondTitle}
            firstOnClick={data.firstOnClick}
            secondOnClick={data.secondOnClick}
          />
        ))}
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
  innerContainer: {
    display: "flex",
    gap: 5,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    gap: { xs: 1, sm: 5 },
  },
};

export default Information;
