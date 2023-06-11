"use client";
// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Container, Typography } from "@mui/material";
import ProtectedRoute from "@/components/ProtectedRoute";

// ** Custom Component Imports
import Dashboard from "./components/Dashboard";

const DigitalWallet = () => {
  return (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <Box sx={styles.innerContainer}>
        
        <Dashboard />

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



export default ProtectedRoute(DigitalWallet);
