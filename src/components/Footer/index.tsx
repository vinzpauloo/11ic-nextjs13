"use client";

// ** React Imports
import React from "react";
import Ticker from "react-ticker";

// ** MUI Imports
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Paper,
  Divider,
} from "@mui/material";

// ** Custom Components Imports
import MobileBottomNavigation from "./components/MobileBottomNavigation";
import Information from "./components/Information";
import Copyright from "./components/Copyright";
import SupportPayment from "./components/SupportPayment";
import Licenses from "./components/Licenses";
import OurApp from "./components/OurApp";

const Footer = () => {
  return (
    <>
      <Box sx={styles.container}>
        <Information />
        <Box sx={styles.wrapper}>
          <SupportPayment />
          <Licenses />
          <OurApp />
        </Box>
        <Divider color="#FFF" light sx={styles.divider} />
        <Copyright />
      </Box>

      {/* Mobile: Bottom Navigation */}
      <MobileBottomNavigation />
    </>
  );
};

const styles = {
  container: {
    mt: 10,
    backgroundColor: "#0A0A0A",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  wrapper: {
    mx: {
      xs: 3,
      sm: 5,
      md: 5,
      lg: 25,
    },
    display: "flex",
    justifyContent: "space-between",
    flexDirection: { xs: "column-reverse", sm: "row" },
    gap: 2,
  },
  divider: {
    mx: {
      xs: 3,
      sm: 5,
      md: 5,
      lg: 25,
    },
  },
};

export default Footer;