// ** Next Imports
import { useRouter } from "next/navigation";

// ** MUI Imports
import { Box, Button } from "@mui/material";

// ** Hooks Imports
import { useCheckAuthentication } from "@/hooks/useCheckAuthentication";

// ** Zustand Store Imports
import { useAccountStore } from "@/zustand/account-store";

// ========================================================================

const LogoutButtons = () => {
  // ** Next Router **
  const router = useRouter();

  // ** Hooks **
  const { handleModalClose, isAuthenticated } = useCheckAuthentication();

  // ** Store **
  const { handleOpen } = useAccountStore((state) => ({
    handleOpen: state.handleOpen,
  }));

  return (
    <Box sx={styles.container}>
      <Button
        sx={styles.notNowBtn}
        onClick={() => handleModalClose("sign-out")}
      >
        Not now
      </Button>
      <Button
        sx={styles.interestedBtn}
        onClick={() => {
          handleModalClose();
          if (isAuthenticated) {
            router.push("/promotions");
          } else {
            handleOpen("register");
          }
        }}
      >
        I&apos;m interested
      </Button>
    </Box>
  );
};

// ========================================================================
// ** Styles
const buttonStyles = {
  width: 200,
  height: 40,
  textTransform: "capitalize",
  fontWeight: 600,
  borderRadius: "20px",
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: { xs: "column", sm: "row" },
    gap: 2,
    mb: 2,
  },
  notNowBtn: {
    ...buttonStyles,
    backgroundColor: "#363735",
    color: "#efb064",
    border: "1px solid #efb064",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "all 0.3s ease-in-out",
    },
  },
  interestedBtn: {
    ...buttonStyles,
    backgroundColor: "#efb064",
    color: "#000",
    "&:hover": {
      backgroundColor: "#F9B957",
      transform: "scale(1.1)",
      transition: "all 0.3s ease-in-out",
    },
  },
};

export default LogoutButtons;
