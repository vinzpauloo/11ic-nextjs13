"use client"

// ** MUI Imports
import { Box, Container } from "@mui/material";

// ** Custom Component Imports
import ProfileHeader from "@/components/ProfileHeader";
import ProfileNavigation from "@/pages/Profile/components/ProfileNavigation";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ProfileHeader />
      <Container maxWidth={false} disableGutters sx={styles.container}>
        <Box sx={styles.innerContainer}>
          {/* CONTENT START */}
          <Box sx={styles.contentWrapper}>
            <ProfileNavigation />
            <Box sx={styles.webWrapper}>
              {/* PUT CONTENTS/COMPONENTS HERE FOR WEB VIEW */}
              {children}
            </Box>
            {/* CONTENT END */}
          </Box>
        </Box>
      </Container>
    </div>
  );
}

const styles = {
  container: {
    paddingBlock : ['2rem'],
    paddingInline: ['1rem', '1rem', 0 ],
    // maxWidth:'1136px', ORIGINAL
    maxWidth:'1300px',
    marginInline : 'auto',
  },
  innerContainer: {
  
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
