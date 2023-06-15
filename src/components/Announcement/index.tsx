// ** React Imports
import React from "react";

// ** MUI Imports
import { Dialog, DialogContent } from "@mui/material";

// ** Custom Component Imports
import AnnouncementHeader from "./components/Header";
import AnnouncementPagination from "./components/Pagination";
import AnnouncementAccordion from "./components/Accordion";

// ** Types
interface ModalProps {
  open: boolean;
  onClose: () => void;
}

// =================================================================
const AnnouncementModal = ({ open, onClose }: ModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent sx={styles.container}>
        <AnnouncementHeader onClose={onClose} />
        <AnnouncementAccordion />
        <AnnouncementPagination />
      </DialogContent>
    </Dialog>
  );
};

const styles = {
  container: {
    background: "linear-gradient(118.89deg, #474747 0%, #323631 100%);",
  },
};

export default AnnouncementModal;
