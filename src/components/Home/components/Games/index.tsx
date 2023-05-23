// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Typography } from "@mui/material";
import Cards from "./components/Cards";

interface GamesProps {
  title: string;
  firstBackground: string;
  secondBackground: string;
  firstGameTitle: string;
  secondGameTitle: string;
  firstBackgroundImage: string;
  secondBackgroundImage: string;
  firstAltName: string;
  secondAltName: string;
}

const Games: React.FC<GamesProps> = ({
  title,
  firstBackground,
  secondBackground,
  firstGameTitle,
  secondGameTitle,
  firstBackgroundImage,
  secondBackgroundImage,
  firstAltName,
  secondAltName,
}) => {
  return (
    <Box
      sx={{
        mx: {
          xs: 3,
          sm: 5,
          md: 5,
          lg: 25,
        },
        borderRadius: "16px",
      }}
    >
      <Typography
        sx={{
          color: "#FFF",
          textTransform: "uppercase",
          fontWeight: 900,
          mb: 2,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          gap: 2,
        }}
      >
        <Cards
          background={firstBackground}
          gameTitle={firstGameTitle}
          backgroundImage={firstBackgroundImage}
          altName={firstAltName}
        />
        <Cards
          background={secondBackground}
          gameTitle={secondGameTitle}
          backgroundImage={secondBackgroundImage}
          altName={secondAltName}
        />
      </Box>
    </Box>
  );
};

export default Games;
