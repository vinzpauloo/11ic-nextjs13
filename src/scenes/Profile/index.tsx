"use client";

// ** React Imports
import React from "react";

// ** Next Imports
import dynamic from "next/dynamic";

// ** MUI Imports
import { Box, Container } from "@mui/material";

// ** Custom Component Imports
import BackdropLoader from "@/shared-components/BackdropLoader";
const ProfileNavigation = dynamic(
  () => import("./components/ProfileNavigation"),
  {
    loading: () => <BackdropLoader description="Loading..." />,
  }
);

// ** Zustand Store Imports
import { useProfileStore } from "@/zustand/profile-store";

// =================================================================

const ProfileContent = () => {
  const { display } = useProfileStore();

  return (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <Box sx={styles.innerContainer}>
        {/* CONTENT START */}
        <Box sx={styles.contentWrapper}>
          <ProfileNavigation />
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
    paddingTop: "120px",
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
    backgroundColor: "#3A3D39",
    width: "100%",
    display: { xs: "none", md: "block" },
    borderRadius: "8px",
    minHeight: "835px",
  },
};

export default ProfileContent;
