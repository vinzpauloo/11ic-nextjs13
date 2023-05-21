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
import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Sports from "./components/Sports";

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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Main Sliper/Carousel */}
          <Carousel />

          {/* Notice Ticker */}
          <NoticeTicker />
        </Box>

        {/* 11ic Sports */}
        <Sports />
      </Box>
    </Container>
  );
};

export default Home;
