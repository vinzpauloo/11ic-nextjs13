// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Button, Typography } from "@mui/material";

// ** Third Party Imports
import CasinoRow from "./components/CasinoRow";
import { useHomeStore } from "@/zustand/home-store";

// const firstRowSliderImages = [
//   {
//     image: `/images/casino-slider/Baccarat.png`,
//   },
//   {
//     image: `/images/casino-slider/Teen-Patti.png`,
//   },
//   {
//     image: `/images/casino-slider/Sicbo.png`,
//   },
//   {
//     image: `/images/casino-slider/DragonTiger.png`,
//   },
//   {
//     image: `/images/casino-slider/Three-card-poker.png`,
//   },
//   {
//     image: `/images/casino-slider/Roulette.png`,
//   },
//   {
//     image: `/images/casino-slider/BlackJack.png`,
//   },
//   {
//     image: `/images/casino-slider/Niuniu.png`,
//   },
// ];

// const secondRowSliderImages = [
//   {
//     image: `/images/casino-slider/Lucky7.png`,
//   },
//   {
//     image: `/images/casino-slider/CrazyTime.png`,
//   },
//   {
//     image: `/images/casino-slider/Sidebet-city.png`,
//   },
//   {
//     image: `/images/casino-slider/Football-studio.png`,
//   },
//   {
//     image: `/images/casino-slider/32cards.png`,
//   },
//   {
//     image: `/images/casino-slider/Mega-Ball.png`,
//   },
//   {
//     image: `/images/casino-slider/Game-shows.png`,
//   },
//   {
//     image: `/images/casino-slider/Casinoholdem.png`,
//   },
// ];
// =================================================================
const Casino = () => {
  const { liveCasino } = useHomeStore();

  const firstRowSliderImages = liveCasino.slice(0, 8);
  const secondRowSliderImages = liveCasino.slice(8);

  return (
    <Box sx={styles.container}>
      <Box>
        <Box sx={styles.headerWrapper}>
          <Typography sx={styles.title}>Live Casino</Typography>
          <Button sx={styles.button}>
            <Typography sx={styles.buttonText}>More</Typography>
          </Button>
        </Box>
        {/* CASINO SLIDER */}
        <CasinoRow sliderImages={firstRowSliderImages} marginBottom={10} />
        <CasinoRow sliderImages={secondRowSliderImages} />
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    mx: {
      xs: 3,
      sm: 5,
      md: 5,
      lg: 25,
    },
    borderRadius: "16px",
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 2,
  },
  title: {
    color: "#FFF",
    textTransform: "uppercase",
    fontWeight: 900,
  },
  button: {
    backgroundColor: "#FFF",
    height: "25px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#ffd346",
    },
  },
  buttonText: {
    color: "#000",
    textTransform: "uppercase",
    fontWeight: 900,
    fontSize: 12,
  },
};

export default Casino;
