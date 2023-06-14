// ** React Imports
import React from "react";

// ** MUI Imports
import { Avatar } from "@mui/material";

// ** Custom Component Imports
import LogoutModal from "@/components/Account/Logout";

// ** Hooks Imports
import { useCheckAuthentication } from "@/hooks/useCheckAuthentication";

// ** Zustand Imports
import { useAccountStore } from "@/zustand/account-store";

// ========================================================================

const ProfileAvatar = () => {
  const { isLogoutModalOpen } = useAccountStore();
  const { handleLogout, handleModalClose } = useCheckAuthentication();

  return (
    <>
      <Avatar
        alt="Natacha"
        src=""
        onClick={handleLogout}
        sx={{
          width: "25px",
          height: "25px",
        }}
      />
      <LogoutModal
        open={isLogoutModalOpen}
        onClose={() => handleModalClose()}
      />
    </>
  );
};

export default ProfileAvatar;
