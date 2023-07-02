"use client";
// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Container, Typography } from "@mui/material";

// ** Custom Component Imports
import InformationAccordion from "../components/Accordion";

// =================================================================
const PrivacyPolicy = () => {
  return (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <Typography sx={styles.text}>Privacy Policy</Typography>
      <InformationAccordion />
    </Container>
  );
};

const styles = {
  container: {
    position: "relative",
    p: 5,
  },
  text: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: 900,
    fontFamily: "Roboto",
    mb: 2,
  },
};

export default PrivacyPolicy;
