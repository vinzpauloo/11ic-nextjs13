"use client";
// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Container, Typography } from "@mui/material";

const VIPContent = () => {
  return (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <Box sx={styles.innerContainer}>
        <Typography sx={{ color: "#FFF" }}>VIP Page</Typography>
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    position: "relative",
    minHeight: "100dvh",
  },
  innerContainer: {
    paddingTop: "164px",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
};

export default VIPContent;
