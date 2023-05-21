// ** React Imports
import React from "react";
import Ticker from "react-ticker";

// ** MUI Imports
import { Box, Button, Typography } from "@mui/material";

const NoticeTicker = () => {
  const newsItems = [
    "Virtual Currency is a currency that does not have a physical form and only exists in digital form, also known as digital currency.",
    // "Sports: Local team wins championship",
    // "Weather: Rain expected all week",
    // "Entertainment: New blockbuster movie released",
  ];

  return (
    <Box
      sx={{
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
      }}
    >
      <Box
        sx={{
          backgroundColor: "#FFF",
          borderTopLeftRadius: "7px",
          borderBottomLeftRadius: "7px",
          p: {
            xs: 0.5,
          },
          textAlign: "center",
          width: "100px",
        }}
      >
        <Typography
          textTransform="uppercase"
          sx={{
            fontSize: {
              xs: 15,
              sm: 16,
            },
          }}
        >
          Notice
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#232323",
          color: "#FFF",
          whiteSpace: "nowrap",
          overflow: "hidden",
          p: {
            xs: 0.5,
          },
        }}
      >
        <Ticker offset="run-in" speed={10}>
          {({ index }) => (
            <>
              <Typography>{newsItems[index % newsItems.length]}</Typography>
            </>
          )}
        </Ticker>

        <Box
          sx={{
            backgroundColor: "#ffd346",
            borderRadius: "12px",
            position: "absolute",
            top: {
              xs: 3,
            },
            right: 5,
          }}
        >
          <Button>
            <Typography fontSize={8} color="black" fontWeight={900}>
              Check More
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NoticeTicker;
