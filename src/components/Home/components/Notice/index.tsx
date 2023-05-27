// ** React Imports
import React from "react";
import Ticker from "react-ticker";

// ** MUI Imports
import { Box, Button, Typography } from "@mui/material";

const NoticeTicker = () => {
  const newsItems = [
    "Virtual Currency is a currency that does not have a physical form and only exists in digital form, also known as digital currency.",
  ];

  return (
    <Box sx={styles.container}>
      <Box sx={styles.titleWrapper}>
        <Typography textTransform="uppercase" sx={styles.title}>
          Notice
        </Typography>
      </Box>
      <Box sx={styles.tickerWrapper}>
        <Ticker offset="run-in" speed={10}>
          {({ index }) => (
            <>
              <Typography>{newsItems[index % newsItems.length]}</Typography>
            </>
          )}
        </Ticker>

        <Box sx={styles.buttonWrapper}>
          <Button>
            <Typography sx={styles.checkMoreText}>Check More</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    mx: {
      xs: 3,
      sm: 5,
      md: 5,
      lg: 25,
    },
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrapper: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: "7px",
    borderBottomLeftRadius: "7px",
    p: {
      xs: 0.5,
    },
    textAlign: "center",
    width: "100px",
  },
  title: {
    fontSize: "14px",
    fontWeight: 900,
  },
  tickerWrapper: {
    width: "100%",
    backgroundColor: "#232323",
    color: "#FFF",
    whiteSpace: "nowrap",
    overflow: "hidden",
    p: {
      xs: 0.5,
    },
  },
  buttonWrapper: {
    backgroundColor: "#ffd346",
    borderRadius: "12px",
    position: "absolute",
    top: {
      xs: 3,
    },
    right: 5,
  },
  checkMoreText: {
    fontSize: 8,
    color: "#000",
    fontWeight: 900,
  },
};

export default NoticeTicker;
