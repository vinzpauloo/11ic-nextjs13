// ** React Imports
import React from "react";

// ** MUI Imports
import { Backdrop, CircularProgress, Stack, Typography } from "@mui/material";

// =================================================================
const BackdropLoader = ({ description }: { description: string }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <Stack alignItems="center" justifyContent="center" gap={2}>
        <CircularProgress color="inherit" />
        <Typography fontFamily="Roboto" color="#FFF">
          {description}
        </Typography>
      </Stack>
    </Backdrop>
  );
};

export default BackdropLoader;
