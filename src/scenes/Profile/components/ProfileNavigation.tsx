// ** React Imports
import React from "react";

// ** MUI Imports
import { Avatar, Box, Stack, Typography } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import StarRateIcon from "@mui/icons-material/StarRate";
import AddCardIcon from "@mui/icons-material/AddCard";

// ** Custom Component Imports
import LoginUsername from "./LoginUsername";
import DepositWithdrawVIP from "./DepositWithdrawVIP";
import ListButtons from "./ListButtons";
import LogoutButton from "./LogoutButton";
import LinksMain from "./LinksMain";

import { useCheckAuthentication } from "@/hooks/useCheckAuthentication";

// =================================================================

const ProfileNavigation = () => {
  // ** Hooks Imports
  const { isAuthenticated } = useCheckAuthentication();

  return (
    <Box sx={styles.container}>
      <LoginUsername />
      <Box sx={styles.innerWrapper}>
        <Stack direction="row" alignItems="center" mx={2} mb={2} gap={1}>
          <Avatar
            alt="deposit-icon"
            src="/images/header/deposit-icon.png"
            sx={{ width: 24, height: 24 }}
          />
          <Typography sx={{ color: "#FFF", fontWeight: 900, fontSize: 18 }}>
            4,900,397,096
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <LinksMain />
        </Stack>
      </Box>
      <ListButtons />
      {isAuthenticated ? <LogoutButton /> : false}
    </Box>
  );
};

const styles = {
  container: {
    width: {
      xs: "100%",
      md: "40%",
      lg: "40%",
      xl: "30%",
    },
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  innerWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#3A3D39",
    minHeight: "166px",
    borderRadius: "8px",
    p: 1,
  },
};

export default ProfileNavigation;
