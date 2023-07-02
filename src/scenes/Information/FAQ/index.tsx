"use client";
// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Container, Typography } from "@mui/material";
import InformationAccordion from "../components/Accordion";

// =================================================================
const FAQ = () => {
  return (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <Typography sx={styles.text}>Frequently Asked Questions</Typography>
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

export default FAQ;
