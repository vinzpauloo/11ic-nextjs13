"use client";
import React, { use } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Header from "@/components/Home/Header";

const Landing = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{ position: "relative" }}>
      <Header />
      <Box
        sx={{
          paddingTop: "164px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      ></Box>
    </Container>
  );
};

export default Landing;
