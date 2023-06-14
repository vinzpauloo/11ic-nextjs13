// ** React Imports
import React from "react";

// ** MUI Imports
import { Avatar, Box, Stack, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// ** Zustand Store Imports
import { useAccountStore } from "@/zustand/account-store";

// ** Hooks Imports
import { useCheckAuthentication } from "@/hooks/useCheckAuthentication";

// =================================================================

const LoginUsername = () => {
  // ** Hooks **
  const { isAuthenticated } = useCheckAuthentication();

  // ** Store **
  const { handleOpen } = useAccountStore((state) => ({
    handleOpen: state.handleOpen,
  }));

  return (
    <Box
      sx={styles.container}
      onClick={() => {
        isAuthenticated ? handleOpen("login") : false;
      }}
    >
      <Stack direction="row" alignItems="center">
        <Avatar alt="User Avatar" src="" sx={styles.avatarStyle} />
        <Stack gap={1}>
          {isAuthenticated ? (
            <>
              <Typography sx={styles.white}>Username</Typography>
              <Typography sx={styles.white} variant="caption">
                VIP
              </Typography>
            </>
          ) : (
            <Typography sx={styles.white}>Login to Check</Typography>
          )}
        </Stack>
      </Stack>
      <NavigateNextIcon sx={{ color: "#FFF" }} />
    </Box>
  );
};

const styles = {
  container: {
    backgroundColor: "#3A3D39",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "92px",
    px: 2,
    borderRadius: "8px",
    cursor: "pointer",
  },
  avatarStyle: {
    width: 56,
    height: 56,
    mr: 2,
  },
  white: {
    color: "#FFF",
  },
};

export default LoginUsername;
