// ** React Imports
import React from "react";

// ** MUI Imports
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps, AlertColor } from "@mui/material/Alert";

// ** Zustand Store Imports
import { useAccountStore } from "@/zustand/account-store";

// ** MUI Alert Customization
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// ===================================================================================

const SnackbarAlert = () => {
  // ** Zustand Store **
  const { openSnack, snackSeverity, snackMessage } = useAccountStore();

  return (
    <Snackbar
      open={openSnack}
      autoHideDuration={1000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={snackSeverity} sx={{ width: "100%" }}>
        {snackMessage}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
