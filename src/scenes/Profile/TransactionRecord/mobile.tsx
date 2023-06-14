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
const TransactionRecordAccordion = dynamic(
  () => import("./components/mobile/Accordion"),
  {
    loading: () => <BackdropLoader description="Loading..." />,
  }
);

// =================================================================
// Mobile View for Transaction Record
const TransactionRecordMobile = () => {
  return (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <DataGridHeader />
      <TransactionRecordAccordion />
    </Container>
  );
};

const styles = {
  container: {
    position: "relative",
    minHeight: "100dvh",
    overflowX: "auto",
  },
};

export default ProtectedRoute(TransactionRecordMobile);
