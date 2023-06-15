// ** React Imports
import React from "react";

// ** MUI Imports
import { Stack } from "@mui/material";

// ** Custom Component Imports
import AnnouncementTitle from "./Title";
import SelectAllRead from "./SelectAllRead";

// ** Types
interface ModalProps {
  onClose: () => void;
}

// =================================================================
const AnnouncementHeader = ({ onClose }: ModalProps) => {
  return (
    <Stack pb={2} gap={2}>
      <AnnouncementTitle onClose={onClose} />
      <SelectAllRead onClose={onClose} />
    </Stack>
  );
};

export default AnnouncementHeader;
