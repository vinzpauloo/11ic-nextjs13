import React from "react";

// ** MUI Imports
import { AccordionSummary, Box, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAnnouncementStore } from "@/zustand/announcement-store";

// ** Types
interface AccordionSummarizedProps {
  id: string;
  icon: string;
  title: string;
  created_at: string;
  description: string;
}

// =================================================================
const AccordionSummarized = ({
  id,
  icon,
  title,
  created_at,
  description,
}: AccordionSummarizedProps) => {
  // ** Store **
  const { hideInitialDesc, setHideInitialDesc, announcementStateData } =
    useAnnouncementStore();
  const announcement = announcementStateData.find((a) => a.id === id);

  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ color: "#FFF" }} />}
      aria-controls={`panel-${id}-content`}
      id={`panel-${id}-header`}
      sx={styles.summaryWrapper}
      onClick={() => {
        setHideInitialDesc(id);
        useAnnouncementStore.getState().markAsRead(id);
      }}
    >
      <Stack direction="row" alignItems="center" gap={2}>
        <Box component="img" src={icon} sx={styles.summaryIcon} />
        <Stack>
          <Typography color="#FFF">{title}</Typography>
          <Typography color="#FFF" variant="caption">
            {created_at}
          </Typography>
          <Box sx={styles.summaryDesc}>
            {hideInitialDesc[id] && (
              <Typography variant="caption">{description}</Typography>
            )}
          </Box>
        </Stack>
      </Stack>
      {/* Read Message Indicator (RED DOT) */}
      {!announcement?.isRead && <Box sx={styles.readMessageIndicator} />}
    </AccordionSummary>
  );
};

const styles = {
  summaryWrapper: {
    backgroundColor: "#323432",
    position: "relative",
  },
  summaryIcon: {
    objectFit: "contain",
    objectPosition: "center",
    width: "50px",
    height: "auto",
  },
  summaryDesc: {
    color: "#FFF",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: {
      xs: "90px",
      sm: "500px",
      md: "600px",
    },
  },
  readMessageIndicator: {
    position: "absolute",
    top: 10,
    right: 8,
    backgroundColor: "red",
    width: 10,
    height: 10,
    borderRadius: "10px",
  },
};

export default AccordionSummarized;
