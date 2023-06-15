// ** React Imports
import React from "react";

// ** MUI Imports
import { IconButton, Stack, Typography } from "@mui/material";

// ** Style Imports
import { AnnouncementModalMUI } from "@/styles/AnnouncementModalMUI";

// ** Zustand Imports
import { useAnnouncementStore } from "@/zustand/announcement-store";

// =================================================================
const SelectAllRead = () => {
  // ** Styles **
  const { CustomMenuItem, CustomSelect } = AnnouncementModalMUI();

  // ** Store **
  const { value } = useAnnouncementStore();

  // ** Store Functions **
  const { handleChangeSelect, markAllAsRead } = useAnnouncementStore(
    (state) => ({
      handleChangeSelect: state.handleChangeSelect,
      markAllAsRead: state.markAllAsRead,
    })
  );

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <CustomSelect value={value} onChange={handleChangeSelect} autoWidth>
        <CustomMenuItem value={"All"}>All</CustomMenuItem>
        <CustomMenuItem value={"Read"}>Read</CustomMenuItem>
      </CustomSelect>
      <IconButton size="small" onClick={markAllAsRead}>
        <Typography color="rgba(255, 255, 255, 0.6)">
          Mark as all Read
        </Typography>
      </IconButton>
    </Stack>
  );
};

export default SelectAllRead;
