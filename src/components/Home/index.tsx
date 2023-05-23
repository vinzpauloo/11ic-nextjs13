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
import Games from "./components/Games";

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

        {/* Fourth Container / Rummy */}
        <Games
          title="Rummy"
          firstBackground="linear-gradient(90deg, #F87700 0%, #F2D53C 100%)"
          firstGameTitle="Jili"
          firstBackgroundImage="/images/games/jili.png"
          firstAltName="Jili"
          secondBackground="linear-gradient(90deg, #931E1E 0%, #ED215E 100%)"
          secondGameTitle="MPoker"
          secondBackgroundImage="/images/games/mpoker.png"
          secondAltName="MPoker"
        />

        {/* Fifth Container / Lottery */}
        <Games
          title="Lottery"
          firstBackground="linear-gradient(90deg, #201E93 0%, #5621ED 100%)"
          firstGameTitle="Saba Lottery"
          firstBackgroundImage="/images/games/saba-lottery.png"
          firstAltName="saba"
          secondBackground="linear-gradient(90deg, #0069B6 0%, #00D8B1 100%);"
          secondGameTitle="Lottery786"
          secondBackgroundImage="/images/games/lottery-786.png"
          secondAltName="786"
        />
      </Box>
    </Container>
  );
};

export default Home;
