// ** React Imports
import React from "react";

// ** MUI Imports
import { AccordionSummary, Box, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// ** Zustand Store Imports
import { useMessageCenterStore } from "@/zustand/message-center-store";

// ** Types
interface MessageCenterAccordionSummarizedProps {
  id: string;
  title: string;
  created_at: string;
  description: string;
}

// =================================================================
const MessageCenterAccordionSummarized = ({
  id,
  title,
  created_at,
  description,
}: MessageCenterAccordionSummarizedProps) => {
  // ** Store **
  const { hideInitialDesc, setHideInitialDesc, announcementStateData } =
    useMessageCenterStore();
  const announcement = announcementStateData.find((a) => a.id === id);

  // ** States **
  const [enableTrash, setEnableTrash] = React.useState<boolean>();

  return (
    <AccordionSummary
      aria-controls={`panel-${id}-content`}
      id={`panel-${id}-header`}
      sx={styles.summaryWrapper}
      onClick={() => {
        setHideInitialDesc(id);
        useMessageCenterStore.getState().markAsRead(id);
        setEnableTrash((prevState) => !prevState);
      }}
    >
      <Stack width="100%">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Stack direction="row" alignItems="center" gap={1}>
            {/* Read Message Indicator (RED DOT) */}
            {!announcement?.isRead && <Box sx={styles.readMessageIndicator} />}
            <Typography color="#FFF">{title}</Typography>
          </Stack>
          <Stack alignItems="flex-end">
            <Typography color="#FFF" variant="caption">
              {created_at}
            </Typography>
            {/* Delete Specific Message */}
            {enableTrash && (
              <DeleteIcon
                sx={{ color: "#777777", fontSize: 18, cursor: "pointer" }}
                onClick={() => {
                  useMessageCenterStore.getState().deleteAnnouncement(id);
                }}
              />
            )}
          </Stack>
        </Stack>
        <Box sx={styles.summaryDesc}>
          {hideInitialDesc[id] && (
            <Typography variant="caption">{description}</Typography>
          )}
        </Box>
      </Stack>
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
    "@media (width:320px)": {
      maxWidth: "280px",
    },
    maxWidth: {
      xs: "350px",
      sm: "720px",
      md: "600px",
      lg: "800px",
    },
  },
  readMessageIndicator: {
    backgroundColor: "red",
    width: 10,
    height: 10,
    borderRadius: "10px",
  },
};

export default MessageCenterAccordionSummarized;
