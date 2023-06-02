"use client";

// ** React Imports
import React, { useState } from "react";

// ** MUI Imports
import { Box, Fab, IconButton, Popover } from "@mui/material";

const FloatingActionButton = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [selectedIcon, setSelectedIcon] = useState("");

  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    icon: string
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedIcon(icon);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box>
      <Fab sx={styles.floatingActionWrapper}>
        <Box
          component="img"
          sx={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          alt="download"
          src="/images/floating-action-btn/customer-service.svg"
          onClick={(event) => handleClick(event, "customer-service")}
        />
        <Box
          component="img"
          sx={{
            objectFit: "contain",
            objectPosition: "center",
            display: { xs: "none", sm: "block" },
          }}
          alt="download"
          src="/images/floating-action-btn/download.svg"
          onClick={(event) => handleClick(event, "download")}
        />
      </Fab>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: 135,
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100px",
            height: "100px",
            objectFit: "contain",
            objectPosition: "center",
          }}
          alt={selectedIcon}
          src={`/images/floating-action-btn/${selectedIcon}.svg`}
        />
      </Popover>
    </Box>
  );
};

const styles = {
  floatingActionWrapper: {
    position: "fixed",
    bottom: 2,
    right: 2,
    mr: {
      xs: 2,
      sm: 5,
    },
    mb: 8,
    zIndex: 1000,
    width: {
      xs: "54px",
      sm: "64px",
    },
    height: {
      xs: "59px",
      sm: "129px",
    },
    borderRadius: "16px",
    background:
      "linear-gradient(118.89deg, rgba(71, 71, 71, 0.8) 0%, rgba(50, 54, 49, 0.8) 100%);",
    backdropFilter: "blur(20px)",
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
};

export default FloatingActionButton;
