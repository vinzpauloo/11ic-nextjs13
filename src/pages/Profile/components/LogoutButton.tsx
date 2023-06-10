// ** React Imports
import React from "react";

// ** Next Imports
import { signOut } from "next-auth/react";

// ** MUI Imports
import { Button, Stack, Typography } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

// =================================================================

const LogoutButton = () => {
  return (
    <Button
      sx={styles.buttonWrapper}
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      <Stack direction="row" gap={1}>
        <PowerSettingsNewIcon sx={{ color: "#F3B867" }} />
        <Typography sx={styles.options}>Logout</Typography>
      </Stack>
    </Button>
  );
};

const styles = {
  buttonWrapper: {
    backgroundColor: "#3A3D39",
    minHeight: {
      xs: "57px",
      sm: "65px",
    },
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#3A3D39",
    },
  },
  options: {
    color: "#F3B867",
    textTransform: "capitalize",
  },
};

export default LogoutButton;
