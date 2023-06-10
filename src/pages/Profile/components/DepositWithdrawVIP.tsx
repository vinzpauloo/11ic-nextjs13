// ** React Imports
import React, { JSXElementConstructor, ReactElement } from "react";

// ** MUI Imports
import { Box, Typography } from "@mui/material";

// ** Zustand Store Imports
import { useProfileStore } from "@/zustand/profile-store";

// ** Types
interface BaseProps {
  icon: ReactElement<any, string | JSXElementConstructor<any>>;
  title?: string;
}

// =================================================================

const DepositWithdrawVIP = ({ icon, title }: BaseProps) => {
  // ** Store **
  const { activeButton } = useProfileStore();
  const { handleBoxClick } = useProfileStore((state) => ({
    handleBoxClick: state.handleBoxClick,
  }));

  // ** Variables **
  const isActive = activeButton === title;

  return (
    <Box
      sx={{
        ...styles.container,
        border: isActive ? "1px solid #F3B867" : "",
      }}
      onClick={() => handleBoxClick(title as string)}
    >
      {React.cloneElement(icon, {
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
      xl: "150px",
    },
    minHeight: {
      xs: "92px",
      sm: "125px",
      md: "90px",
      xl: "95px",
    },
    mb: 2,
    cursor: "pointer",
  },
};

export default DepositWithdrawVIP;
