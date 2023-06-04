// ** React Imports
import React from "react";

// ** MUI Imports
import { Avatar, Box, Button, Chip, Typography } from "@mui/material";

const DepositChip = () => {
  return (
    <Box sx={styles.container}>
      <Chip
        avatar={
          <Avatar alt="deposit-icon" src="/images/header/deposit-icon.png" />
        }
        label="5,000,000"
        size="medium"
        sx={styles.chip}
      />
      <Box sx={styles.btnWrapper}>
        <Button>
          <Typography sx={styles.deposit}>Deposit</Typography>
        </Button>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#4B4C4B",
    padding: 0,
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderRadius: "12px",
  },
  chip: {
    ".MuiChip-avatar": {
      cursor: "pointer",
    },
    color: "#FFF",
    backgroundColor: "transparent",
  },
  btnWrapper: {
    backgroundColor: "#F3B867",
    borderRadius: "12px",
  },
  deposit: {
    fontSize: 8,
    color: "#000",
    fontWeight: 900,
  },
};

export default DepositChip;
