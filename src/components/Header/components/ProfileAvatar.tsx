// ** React Imports
import React from "react";

// ** MUI Imports
import { Avatar } from "@mui/material";

// ** Hooks
import { useCheckAuthentication } from "@/hooks/useCheckAuthentication";

// ========================================================================

const ProfileAvatar = () => {
  const { handleLogout } = useCheckAuthentication();
  return (
    <Avatar
      alt="Natacha"
      src=""
      onClick={handleLogout}
      sx={{
        width: "25px",
        height: "25px",
      }}
    />
  );
};

export default ProfileAvatar;
