// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, IconButton, Stack, Typography } from "@mui/material";

// ** Custom Component Imports
import IconifyIcon from "@/shared-components/Icon";

// ** Zustand Store Imports
import { useAnnouncementStore } from "@/zustand/announcement-store";

// ** Types
interface ModalProps {
  onClose: () => void;
}

const AnnouncementTitle = ({ onClose }: ModalProps) => {
  // ** Store **
  const { announcementStateData } = useAnnouncementStore();
  const unreadAnnouncements = announcementStateData.filter((a) => !a.isRead);

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack position="relative">
        <Box sx={styles.container}>
          <Typography sx={styles.numberOfAnnouncements}>
            {unreadAnnouncements?.length}
          </Typography>
        </Box>
        <Typography variant="h6" color="#FFF" fontWeight={900}>
          Announcement
        </Typography>
      </Stack>
      <IconButton size="small" onClick={onClose} sx={styles.closeIcon}>
        <IconifyIcon icon="mdi:close" fontSize={20} />
      </IconButton>
    </Stack>
  );
};

const styles = {
  container: {
    backgroundColor: "red",
    width: "20px",
    maxHeight: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    position: "absolute",
    bottom: 24,
    right: -8,
  },
  numberOfAnnouncements: {
    color: "#FFF",
    fontSize: 12,
  },
  closeIcon: {
    color: "rgba(255, 255, 255, 0.6)",
  },
};

export default AnnouncementTitle;
