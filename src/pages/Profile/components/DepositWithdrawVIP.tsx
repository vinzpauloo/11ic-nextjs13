// ** React Imports
import React, { JSXElementConstructor, ReactElement } from "react";

// ** Next Imports
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// ** MUI Imports
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

// ** Zustand Store Imports
import { useProfileStore } from "@/zustand/profile-store";

// ** Custom Component Imports
import DigitalWallet from "../DigitalWallet";

// ** Zustand Store Imports
import { useAccountStore } from "@/zustand/account-store";

// ** Types
interface BaseProps {
  icon: ReactElement<any, string | JSXElementConstructor<any>>;
  title?: string;
}

// =================================================================

const DepositWithdrawVIP = ({ icon, title }: BaseProps) => {
  // ** Router **
  const router = useRouter();

  // ** Next Auth **
  const session = useSession();

  // ** Store **
  const { activeButton, setDisplay, setProfileHeader } = useProfileStore();
  const { handleBoxClick } = useProfileStore((state) => ({
    handleBoxClick: state.handleBoxClick,
  }));
  const { handleOpen } = useAccountStore((state) => ({
    handleOpen: state.handleOpen,
  }));

  // ** MUI **
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ** Variables **
  const isActive = activeButton === title;

  return (
    <Box
      sx={{
        ...styles.container,
        border: isActive ? "1px solid #F3B867" : "",
      }}
      onClick={() => {
        handleBoxClick(title as string);
        if (isMobile && session?.status === "authenticated") {
          setProfileHeader("Digital Wallet");
          router.push("/profile/deposit");
        } else if (session?.status === "authenticated") {
          setDisplay(<DigitalWallet />);
        } else {
          handleOpen("login");
        }
      }}
    >
      {icon &&
        React.cloneElement(icon, {
          sx: { ...icon.props.sx, color: isActive ? "#F3B867" : "#FFF" },
        })}
      <Typography sx={{ color: isActive ? "#F3B867" : "#FFF" }}>
        {title}
      </Typography>
    </Box>
  );
};

const styles = {
  container: {
    backgroundColor: "#4B4C4B",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px",
    width: {
      xs: "105px",
    },
    minWidth: {
      xs: "73px",
      sm: "210px",
      md: "100px",
      xxl: "150px",
    },
    minHeight: {
      xs: "92px",
      sm: "125px",
      md: "90px",
      xxl: "95px",
    },
    mb: 2,
    cursor: "pointer",
  },
};

export default DepositWithdrawVIP;
