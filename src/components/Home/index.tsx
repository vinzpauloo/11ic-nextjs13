"use client";

// ** React Imports
import React, { use } from "react";

// ** Next Imports
import Link from "next/link";

// ** MUI Imports
import { Box, Button, Container, Typography } from "@mui/material";

// ** Custom Component Imports
import NoticeTicker from "./components/Notice";
import Carousel from "./components/Carousel";
import Sports from "./components/Sports";
import Casino from "./components/Casino";

const Home = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{ position: "relative" }}>
      <Box
        sx={{
          paddingTop: "164px",
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {/* First Container / Carousel and Notice */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Carousel />
          <NoticeTicker />
        </Box>

        {/* Second Container / 11ic Sports */}
        <Sports />

        {/* Third Container / Live Casino */}
        <Casino />
      </Box>
    </Container>
  );
};

export default Home;
