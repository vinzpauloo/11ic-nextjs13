"use client";

// ** React Imports
import React from "react";

// ** Next Imports
import { usePathname, useRouter } from "next/navigation";

// ** MUI Imports
import { Box, Stack, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

// ** Zustand Imports
import { useProfileStore } from "@/zustand/profile-store";

// =================================================================
const ProfileHeader = () => {
  // ** Next Navigation **
  const pathName = usePathname();
  const router = useRouter();

  // ** Store **
  const { profileHeader } = useProfileStore();

  const noHeader = pathName === "/profile";

  return !noHeader ? (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ background: "#1d1b19", height: "90px" }}
      onClick={() => router.back()}
    >
      <NavigateBeforeIcon sx={{ color: "#FFF" }} fontSize="large" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography sx={{ color: "#FFF", fontSize: 18 }}>
          {profileHeader}
        </Typography>
      </Box>
    </Stack>
  ) : (
    <></>
  );
};

export default ProfileHeader;
