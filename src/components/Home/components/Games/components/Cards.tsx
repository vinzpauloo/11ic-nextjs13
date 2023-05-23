// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Typography } from "@mui/material";

interface CardProps {
  background: string;
  gameTitle: string;
  backgroundImage: string;
  altName: string;
}

const Cards: React.FC<CardProps> = ({
  background,
  gameTitle,
  backgroundImage,
  altName,
}) => {
  return (
    <Box
      sx={{
        background: background,
        backgroundBlendMode: "overlay",
        height: "200px",
        width: "100%",
        borderRadius: "16px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <Box sx={{ pl: { xs: 2, sm: 4 }, position: "absolute", zIndex: 1000 }}>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 900,
            color: "#FFF",
            textTransform: "uppercase",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            maxWidth: "200px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          {gameTitle}
        </Typography>
      </Box>
      <Box
        component="img"
        sx={{
          position: "absolute",
          right: {
            xs: -70,
            sm: 0,
          },
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
        }}
        alt={altName}
        src={backgroundImage}
      />
    </Box>
  );
};

export default Cards;
