"use client";
// ** React Imports
import React from "react";

// ** Next Imports
import dynamic from "next/dynamic";

// ** MUI Imports
import { Container, Stack, Typography } from "@mui/material";

// ** Custom Component Imports
import ProtectedRoute from "@/components/ProtectedRoute";
import BackdropLoader from "@/shared-components/BackdropLoader";
const MessageCenterHeader = dynamic(() => import("./components/Header"), {
  loading: () => <BackdropLoader description="Loading..." />,
});
const MessageCenterAccordion = dynamic(() => import("./components/Accordion"), {
  loading: () => <BackdropLoader description="Loading..." />,
});
const MessageCenterPagination = dynamic(
  () => import("./components/Pagination"),
  {
    loading: () => <BackdropLoader description="Loading..." />,
  }
);

// ** Zustand Store Imports
import { useMessageCenterStore } from "@/zustand/message-center-store";

// =================================================================
// Mobile View for Transaction Record
const MessageCenterMobile = () => {
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
    minHeight: "100dvh",
    overflowX: "auto",
  },
  noMessageText: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "#777777",
    fontWeight: 900,
    fontSize: 25,
  },
};

export default ProtectedRoute(MessageCenterMobile);
