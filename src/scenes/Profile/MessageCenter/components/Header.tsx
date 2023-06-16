// ** React Imports
import React from "react";

// ** MUI Imports
import { Button, Stack } from "@mui/material";

// ** Zustand Store Imports
import { useMessageCenterStore } from "@/zustand/message-center-store";

// =================================================================
const MessageCenterHeader = () => {
  // ** Store Functions **
  const { markAllAsRead, deleteAllAnnouncements } = useMessageCenterStore(
    (state) => ({
      handleChangeSelect: state.handleChangeSelect,
      markAllAsRead: state.markAllAsRead,
      deleteAllAnnouncements: state.deleteAllAnnouncements,
    })
  );

  return (
    <Stack direction="row" alignItems="center" gap={2} mb={2}>
      <Button sx={styles.button} onClick={markAllAsRead}>
        Read All
      </Button>
      <Button sx={styles.button} onClick={deleteAllAnnouncements}>
        Delete All
      </Button>
    </Stack>
  );
};

const styles = {
  button: {
    height: "37px",
    width: "110px",
    backgroundColor: "#4B4C4B",
    textTransform: "capitalize",
    color: "#FFF",
    fontFamily: "Roboto",
    fontWeight: 900,
    "&:hover": {
      backgroundColor: "#4B4C4B",
    },
  },
};

export default MessageCenterHeader;
