"use client";
// ** React Imports
import React from "react";

// ** Next Imports
import dynamic from "next/dynamic";

// ** MUI Imports
import { Container } from "@mui/material";

// ** Custom Component Imports
import ProtectedRoute from "@/components/ProtectedRoute";
import BackdropLoader from "@/shared-components/BackdropLoader";
const DataGridHeader = dynamic(() => import("./components/DataGridHeader"), {
  loading: () => <BackdropLoader description="Loading..." />,
});
const BettingRecordAccordion = dynamic(
  () => import("./components/mobile/Accordion"),
  {
    loading: () => <BackdropLoader description="Loading..." />,
  }
);

// =================================================================
// Mobile View for Betting Record
const BettingRecordMobile = () => {
  return (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <DataGridHeader />
      <BettingRecordAccordion />
    </Container>
  );
};

const styles = {
  container: {
    position: "relative",
    minHeight: "100dvh",
  },
};

export default ProtectedRoute(BettingRecordMobile);
