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
        ...styles.container,
      }}
    >
      <Box sx={styles.titleWrapper}>
        <Typography sx={styles.gameTitle}>{gameTitle}</Typography>
      </Box>
      <Box
        component="img"
        sx={styles.image}
        alt={altName}
        src={backgroundImage}
      />
    </Box>
  );
};

const styles = {
  container: {
    backgroundBlendMode: "overlay",
    height: "200px",
    width: "100%",
    borderRadius: "16px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  titleWrapper: {
    pl: { xs: 2, sm: 4 },
    position: "absolute",
    zIndex: 1000,
  },
  gameTitle: {
    fontSize: "40px",
    fontWeight: 900,
    color: "#FFF",
    textTransform: "uppercase",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    maxWidth: "200px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  image: {
    position: "absolute",
    right: {
      xs: -70,
      sm: 0,
    },
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
  },
};

export default Cards;
