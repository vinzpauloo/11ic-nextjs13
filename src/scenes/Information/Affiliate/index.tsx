"use client";
// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Container, Paper, Typography } from "@mui/material";

// ** Data Imports
import AffiliateData from "@/data/AffiliateData";
import AffiliateDetails from "./components/AffiliateDetails";

// =================================================================
const AffiliateTOS = () => {
  return (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <Typography sx={styles.text}>Affiliate Terms & Conditions</Typography>
      <AffiliateDetails />
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

export default AffiliateTOS;
