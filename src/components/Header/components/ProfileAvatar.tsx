// ** React Imports
import React from "react";

// ** MUI Imports
import { Avatar } from "@mui/material";

// ** Hooks
import { useCheckAuthentication } from "@/hooks/useCheckAuthentication";
import Logout from "@/components/Account/Logout";
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
      <Logout open={isLogoutModalOpen} onClose={() => handleModalClose()} />
    </>
  );
};

export default ProfileAvatar;
