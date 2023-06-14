// ** MUI Imports
import { Box, Dialog, DialogContent } from "@mui/material";

// ** Custom Component Imports
import Title from "./components/Title";
import LogoutAdsCard from "./components/Cards";
import LogoutButtons from "./components/Buttons";

// ** Types
interface ModalProps {
  open: boolean;
  onClose: (willSignOut: string) => void;
}

// ========================================================================

const LogoutModal = ({ open, onClose }: ModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent sx={styles.container}>
        <Title />
        <Box sx={styles.cardsWrapper}>
          <LogoutAdsCard
            title="GIDLE Concert"
            subheader="Purchase now for as low as $300"
            image="/images/slider/gidle.jpg"
            alt="gidle"
            details="Welcome to GIDLE"
          />
          <LogoutAdsCard
            title="Blackpink"
            subheader="Asia Tour 2024"
            image="/images/slider/blackpink.jpg"
            alt="gidle"
            details="For more information: https://blackpink.com"
          />
          <LogoutAdsCard
            title="LE SSERAFIM"
            subheader="World Tour 2023"
            image="/images/slider/serafim.jpg"
            alt="gidle"
            details="50% off for the first 1000 customers"
          />
        </Box>
        <LogoutButtons />
      </DialogContent>
    </Dialog>
  );
};

const styles = {
  container: {
    background: "linear-gradient(118.89deg, #474747 0%, #323631 100%);",
    position: "relative",
    height: {
      sm: "636px",
    },
    display: "flex",
    flexDirection: "column",
    gap: 2,
    width: "100%",
  },
  cardsWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    overflowX: "auto",
  },
};

export default LogoutModal;
