"use client";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import { Box, Popover } from "@mui/material";

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
      <Fab
        sx={{
          position: "fixed",
          bottom: 2,
          right: 2,
          mr: {
            xs: 2,
            sm: 5,
          },
          mb: 5,
          zIndex: 1000,
          width: "64px", // to accommodate two icons
          height: "129px",
          borderRadius: "16px", // custom shape
          background:
            "linear-gradient(118.89deg, rgba(71, 71, 71, 0.8) 0%, rgba(50, 54, 49, 0.8) 100%);",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
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

export default FloatingActionButton;
