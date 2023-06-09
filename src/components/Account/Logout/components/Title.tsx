import { Typography } from "@mui/material";
import React from "react";

const Title = () => {
  return (
    <>
      <Typography
        sx={{
          color: "#FFF",
          textAlign: "center",
          fontWeight: 900,
          fontSize: 20,
        }}
      >
        Dear customer, please wait a moment before leaving.
      </Typography>
      <Typography
        sx={{
          color: "#FFF",
          textAlign: "center",
          fontSize: 12,
        }}
      >
        Don&apos;t miss out on the various events and benefits we have prepared
        for you. In addition to the <br />
        events listed below, various events and benefits are prepared for
        customers.
      </Typography>
    </>
  );
};

export default Title;
