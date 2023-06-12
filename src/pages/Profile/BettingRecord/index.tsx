"use client";
// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Container } from "@mui/material";

// ** Custom Component Imports
import ProtectedRoute from "@/components/ProtectedRoute";
import BettingRecordDataGrid from "./components/DataGrid";
import DataGridHeader from "./components/DataGridHeader";

// =================================================================
// Web View for Betting Record
const BettingRecordContent = () => {
  return (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <Box sx={styles.innerContainer}>
        <DataGridHeader />
        <BettingRecordDataGrid />
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    position: "relative",
    p: 5,
  },
  innerContainer: {},
};

export default ProtectedRoute(BettingRecordContent);
