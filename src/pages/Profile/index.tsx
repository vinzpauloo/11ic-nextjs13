"use client";

// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Container } from "@mui/material";

// ** Custom Component Imports
import ProfileNavigation from "./components/ProfileNavigation";

// =================================================================

const ProfileContent = () => {
  return (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <Box sx={styles.innerContainer}>
        {/* CONTENT START */}
        <Box sx={styles.contentWrapper}>
          <ProfileNavigation />
          <Box sx={styles.webWrapper}>
            {/* PUT CONTENTS/COMPONENTS HERE FOR WEB VIEW */}
          </Box>
          {/* CONTENT END */}
        </Box>
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    position: "relative",
    minHeight: "100dvh",
  },
  innerContainer: {
    paddingTop: "164px",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  contentWrapper: {
    mx: {
      xs: 3,
      sm: 5,
      md: 5,
      lg: 5,
      xl: 25,
    },
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row",
      lg: "row",
    },
    gap: 2,
  },
  // WEB VIEW MAIN CONTAINER ** RIGHT SIDE **
  webWrapper: {
    backgroundColor: "#3A3D39",
    width: "100%",
    display: { xs: "none", md: "block" },
    borderRadius: "8px",
    minHeight: "835px",
  },
};

export default ProfileContent;
