"use client";

// ** React Imports
import React from "react";

// ** Next Imports
import { usePathname, useRouter } from "next/navigation";

// ** MUI Imports
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

// ** Zustand Imports
import { useMainStore } from "@/zustand/main-store";

// =================================================================
const SubHeader = () => {
  // ** Next Navigation **
  const pathName = usePathname();
  const router = useRouter();

  // ** MUI **
  const theme = useTheme();
  const isWeb = useMediaQuery(theme.breakpoints.up("md"));

  // ** Store **
  const { mainHeader } = useMainStore();

  // ** Used to render title in mobile **
  const header = localStorage.getItem("mainHeader");

  // ** Constants **
  const basePaths = isWeb ? ["/vip", "/promotions", "/blog"] : [];
  const noHeader = pathName === "/profile";
  const noHeaderInWeb = basePaths.some((basePaths) =>
    pathName?.startsWith(basePaths)
  );

  return !noHeader && !noHeaderInWeb ? (
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
          {mainHeader || header}
        </Typography>
      </Box>
    </Stack>
  ) : (
    <></>
  );
};

export default SubHeader;
