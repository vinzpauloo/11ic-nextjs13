"use client";
// ** React Imports
import React from "react";

// ** MUI Imports
import { Container, Paper, Typography } from "@mui/material";

// ** Custom Component Imports
import InformationAccordion from "../components/Accordion";
import Introduction from "./components/Introduction";

// =================================================================
const TermsAndConditions = () => {
  return (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <Typography sx={styles.text}>Terms & Conditions</Typography>
      <Introduction />
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

export default TermsAndConditions;
