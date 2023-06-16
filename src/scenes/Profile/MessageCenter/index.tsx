"use client";
// ** React Imports
import React from "react";

// ** MUI Imports
import { Container, Stack, Typography } from "@mui/material";

// ** Custom Component Imports
import ProtectedRoute from "@/components/ProtectedRoute";
import MessageCenterHeader from "./components/Header";
import MessageCenterAccordion from "./components/Accordion";
import MessageCenterPagination from "./components/Pagination";

// ** Zustand Store Imports
import { useMessageCenterStore } from "@/zustand/message-center-store";

// =================================================================
// Web View for Message Center
const MessageCenterContent = () => {
  // ** Store **
  const { announcementStateData } = useMessageCenterStore();

  return announcementStateData && announcementStateData.length > 0 ? (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <Stack gap={0}>
        <MessageCenterHeader />
        <MessageCenterAccordion />
        <MessageCenterPagination />
      </Stack>
    </Container>
  ) : (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ ...styles.container, height: "835px" }}
    >
      <Stack gap={0}>
        <MessageCenterHeader />
        <Typography sx={styles.noMessageText}>No messages</Typography>
      </Stack>
    </Container>
  );
};

const styles = {
  container: {
    position: "relative",
    p: 5,
  },
  noMessageText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "#777777",
    fontWeight: 900,
    fontSize: 35,
  },
};

export default ProtectedRoute(MessageCenterContent);
