import { Box, Typography } from "@mui/material";
import React from "react";

interface BetFairProps {
  logo: string;
  title: string;
  description: string;
}

const BetFair = (props: BetFairProps) => {
  const { logo, title, description } = props;

  return (
    <Box
      sx={{
        width: "100%",
        height: "156px",
        backgroundColor: "#3A3D39",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            backgroundColor: "#4B4C4B",
            width: {
              xs: "100px",
              sm: "164px",
              md: "94px",
              lg: "120px",
              xl: "200px",
            },
            height: {
              xs: "100px",
              sm: "124px",
              md: "84px",
              lg: "100px",
              xl: "120px",
            },
            minWidth: {
              xs: "100px",
              sm: "164px",
              md: "94px",
              lg: "120px",
              xl: "200px",
            },
            minHeight: {
              xs: "100px",
              sm: "124px",
              md: "84px",
              lg: "100px",
              xl: "120px",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ml: 2,
            borderRadius: "12px",
          }}
        >
          <Box
            component="img"
            sx={{
              width: {
                xs: "90px",
                sm: "140px",
                md: "80px",
                lg: "85px",
                xl: "120px",
              },
              objectFit: "contain",
              objectPosition: "center",
            }}
            alt="betfair-logo"
            src={logo}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "16px",
                xl: "20px",
              },
              fontWeight: "900",
              color: "#FFF",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "10px",
                xl: "14px",
              },
              color: "#FFF",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#424541",
          height: "156px",
          width: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTopRightRadius: "8px",
          borderBottomRightRadius: "8px",
        }}
      >
        <Typography sx={{ color: "#FFF", fontWeight: "900" }}>&gt;</Typography>
      </Box>
    </Box>
  );
};

export default BetFair;
