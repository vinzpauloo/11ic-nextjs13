// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Typography } from "@mui/material";

const Copyright = () => {
  return (
    <Box sx={styles.container}>
      <Typography color="#FFF" variant="caption" sx={styles.text}>
        COPYRIGHT @ 2003-2023 11ic (International) Ltd.
      </Typography>
    </Box>
  );
};

const styles = {
  container: {
    mb: { xs: 8, sm: 2 },
  },
  text: {
    mx: {
      xs: 3,
      sm: 5,
      md: 5,
      lg: 25,
    },
    whiteSpace: "nowrap",
    fontSize: 8,
  },
};

export default Copyright;
