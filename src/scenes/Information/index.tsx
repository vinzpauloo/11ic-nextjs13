"use client";
// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Container } from "@mui/material";

// ** Custom Component Imports
import InformationNavigation from "./components/InformationNavigation";

// ** Zustand Imports
import { useInformationStore } from "@/zustand/information-store";

// =================================================================
const InformationContent = () => {
  const { display } = useInformationStore();

  return (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <Box sx={styles.innerContainer}>
        {/* CONTENT START */}
        <Box sx={styles.contentWrapper}>
          <InformationNavigation />
          <Box sx={styles.webWrapper}>
            {/* PUT CONTENTS/COMPONENTS HERE FOR WEB VIEW */}
            {display}
          </Box>
          {/* CONTENT END */}
        </Box>
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    paddingBlock: ["2rem"],
    paddingInline: ["1rem", "1rem", 0],
    maxWidth: "1300px",
    marginInline: "auto",
  },
  innerContainer: {
    paddingTop: {
      xs: "0px",
      md: "120px",
    },
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  contentWrapper: {
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
    backgroundColor: "#292929",
    width: "100%",
    display: { xs: "none", md: "block" },
    borderRadius: "8px",
    maxHeight: "835px",
    overflow: "auto",
  },
};

export default InformationContent;
