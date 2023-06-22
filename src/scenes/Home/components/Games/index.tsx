// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Typography } from "@mui/material";

// ** Custom Component Imports
import Cards from "./components/Cards";

// ** Types
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
  firstOnClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  secondOnClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

// =================================================================
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
  firstOnClick,
  secondOnClick,
}) => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>{title}</Typography>
      <Box sx={styles.cardsWrapper}>
        <Cards
          background={firstBackground}
          gameTitle={firstGameTitle}
          backgroundImage={firstBackgroundImage}
          altName={firstAltName}
          firstOnClick={firstOnClick}
        />
        <Cards
          background={secondBackground}
          gameTitle={secondGameTitle}
          backgroundImage={secondBackgroundImage}
          altName={secondAltName}
          secondOnClick={secondOnClick}
        />
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    mx: {
      xs: 3,
      sm: 5,
      md: 5,
      lg: 25,
    },
    borderRadius: "16px",
  },
  title: {
    color: "#FFF",
    textTransform: "uppercase",
    fontWeight: 900,
    mb: 2,
  },
  cardsWrapper: {
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "row",
    },
    gap: 2,
  },
};

export default Games;
