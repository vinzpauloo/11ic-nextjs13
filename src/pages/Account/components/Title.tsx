// ** React Imports
import React from "react";

// ** MUI Imports
import { Typography } from "@mui/material";

interface TitleProps {
  title: string;
}

const Title = (props: TitleProps) => {
  return (
    <Typography
      sx={{
        display: { xs: "block", sm: "none" },
        textAlign: "center",
        color: "#FFF",
        p: 5,
      }}
    >
      {props.title}
    </Typography>
  );
};

export default Title;
