"use client";

import React from "react";
import { useGlobalStore } from "@/zustand/store";
import { Box, Container } from "@mui/material";

const DashboardContent = () => {
  const { postData, title } = useGlobalStore();

  console.log(postData);
  console.log(`dashboard title`, title);

  return (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <Box
        sx={{
          paddingTop: "164px",
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      ></Box>
    </Container>
  );
};

const styles = {
  container: {
    position: "relative",
    minHeight: "100dvh",
  },
};

export default DashboardContent;
