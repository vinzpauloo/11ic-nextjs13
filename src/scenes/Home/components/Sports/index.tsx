import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import BetFair from "./components/BetFair";

const Sports = () => {
  return (
    <Box
      sx={{
        mx: {
          xs: 3,
          sm: 5,
          md: 5,
          lg: 25,
        },
        height: {
          xs: "660px",
          sm: "760px",
          md: "328px",
          lg: "328px",
          xl: "328px",
        },
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
        },
        gap: 2,
      }}
    >
      {/* Left Side / 11c Sports with Play Button */}
      <Box
        sx={{
          width: {
            xs: "auto",
            sm: "auto",
            md: "944px",
            lg: "944px",
            xl: "1400px",
          },
          height: {
            xs: "900px",
            sm: "900px",
            md: "auto",
            lg: "auto",
            xl: "auto",
          },
          borderRadius: "16px",
          backgroundImage: `url(/images/11ic-sports/11ic-sports-pc-bg.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 3,
            pl: 3,
            position: {
              xs: "absolute",
              sm: "initial",
              md: "initial",
              lg: "initial",
              xl: "initial",
            },
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "24px", whiteSpace: "nowrap" }}
          >
            11ic Sports
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "#FFF",
              fontSize: {
                xs: "12px",
                sm: "12px",
                md: "14px",
                lg: "12px",
                xl: "12px",
              },
            }}
          >
            11ic Sports offers excellent sports betting with diverse options and
            live-in play betting.
          </Typography>

          <Button
            sx={{
              backgroundColor: "#FFF",
              width: "107px",
              height: "40px",
              color: "#000",
            }}
            endIcon={
              <PlayArrowIcon
                sx={{ marginLeft: "-5px", verticalAlign: "middle" }}
              />
            }
          >
            Play
          </Button>
        </Box>
        <Box
          component="img"
          sx={{
            width: {
              xs: "460px",
              sm: "650px",
              md: "480px",
              lg: "480px",
              xl: "500px",
            },
            objectFit: "contain",
            objectPosition: "center",
          }}
          alt="player"
          src="/images/11ic-sports/11ic-sports-pc-player.png"
        />
      </Box>

      {/* Right Side // BetFair and Evolution Buttons */}
      <Box
        sx={{
          width: {
            xs: "auto",
            sm: "auto",
            md: "424px",
            lg: "424px",
            xl: "824px",
          },
          // backgroundColor: "blue",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <BetFair
          logo="/images/11ic-sports/betfair-logo.png"
          title="11c Exchange"
          description="Best odds in free market for trading and betting."
        />
        <BetFair
          logo="/images/11ic-sports/evolution-logo.png"
          title="Evolution"
          description="Unlimited games on your screen."
        />
      </Box>
    </Box>
  );
};

export default Sports;
