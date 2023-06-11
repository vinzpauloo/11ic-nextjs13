"use client";
// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Container, Typography } from "@mui/material";
import ProtectedRoute from "@/components/ProtectedRoute";

// ** Custom Component Imports
import Dashboard from "./components/Dashboard";

const DigitalWallet = () => {
  return <Dashboard />;

  
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
