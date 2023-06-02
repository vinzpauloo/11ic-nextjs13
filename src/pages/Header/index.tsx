"use client";
// ** React Imports
import React, { useRef } from "react";

// ** Next Imports
import Image from "next/image";
import { useRouter } from "next/navigation";

// ** MUI Imports
import {
  Box,
  Button,
  Divider,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

// ** Zustand Store Imports
import { useGlobalStore } from "@/zustand/store";
import { useAccountStore } from "@/zustand/account-store";

// ** Custom Components Imports
import LanguageDropdown from "./components/Language";
import TopTabNavigation from "./components/TopTabNavigation";
import LoginSignUpModal from "../Account/index";

// ** Core Imports
import { useSettings } from "@/@core/hooks/useSettings";

// ** Utility Imports
import { useTranslateString } from "@/utils/TranslateString";

const Header = () => {
  // * Router
  const router = useRouter();

  // * Utils
  const TranslateString = useTranslateString();

  // * Store
  const { settings, saveSettings } = useSettings();
  const { postData, setTitle, title } = useGlobalStore();
  const { buttonClicked, setButtonClicked } = useAccountStore();

  // ** Ref
  const modalRef = useRef<{ clearForm: () => void } | null>(null);

  // * States
  const [headerBg, setHeaderBg] = React.useState("rgba(33, 31, 27, 0.8)");
  const [open, setOpen] = React.useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY < 5) {
      return setHeaderBg("rgba(33, 31, 27, 0.8)");
    } else if (window.scrollY > 5) {
      return setHeaderBg("rgba(0, 0, 0, 0.5)");
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const handleOpen = (button: string) => {
    setButtonClicked(button);
    setOpen(true);
  };

  const handleClose = () => {
    if (modalRef.current) {
      modalRef.current.clearForm();
    }
    setOpen(false);
  };

  return (
    <Box sx={{ ...styles.container, backgroundColor: headerBg }}>
      <Box sx={styles.firstWrapper}>
        <Box sx={styles.fillerContainer} />
        <Box sx={styles.logoWrapper} onClick={() => router.push("/")}>
          <Image
            src="/images/header/11ic.svg"
            alt="main-logo"
            width={100}
            height={45}
            priority
          />
        </Box>

        <Box sx={styles.logoAndLoginSignUpWrapper}>
          <Box
            component="img"
            sx={styles.downloadIcon}
            alt="download"
            src="./images/header/header-download.svg"
          />
          <Button
            variant="contained"
            sx={styles.loginButton}
            onClick={() => handleOpen("login")}
          >
            {TranslateString(`Login`)}
          </Button>
          <Button
            variant="contained"
            sx={styles.signUpButton}
            onClick={() => handleOpen("register")}
          >
            {TranslateString(`Sign Up`)}
          </Button>
          <LanguageDropdown settings={settings} saveSettings={saveSettings} />
        </Box>
        <LoginSignUpModal ref={modalRef} open={open} onClose={handleClose} />
      </Box>
      <TopTabNavigation />
    </Box>
  );
};

// ** Styles
const styles = {
  container: {
    position: "fixed",
    width: "100%",
    height: "128px",
    zIndex: 1000, // High z-index to ensure the header is on top
    p: 2,
  },
  firstWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  fillerContainer: {
    flex: { sm: null, md: 1.3, lg: 1.3 },
    display: { sm: "none", md: "block", lg: "block" },
  },
  logoWrapper: {
    flex: 1,
    cursor: "pointer",
  },
  logoAndLoginSignUpWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "0.20em",
    flex: 0,
  },
  downloadIcon: {
    height: 20,
    width: 20,
    display: {
      xs: "none",
      sm: "block",
      md: "block",
      lg: "block",
    },
  },
  loginButton: {
    color: "#F3B867",
    backgroundColor: "#000",
    border: "1px solid #F3B867",
    width: {
      sm: "90px",
      md: "90px",
      lg: "90px",
      xl: "106px",
    },
    height: "36px",
    borderRadius: "16px",
    textTransform: "none",
    fontSize: 12,
  },
  signUpButton: {
    color: "#000",
    backgroundColor: "#F3B867",
    width: {
      xs: "20px",
      sm: "90px",
      md: "90px",
      lg: "90px",
      xl: "106px",
    },
    height: "36px",
    borderRadius: "16px",
    textTransform: "none",
    fontSize: 12,
    whiteSpace: "nowrap",

    "&:hover": {
      backgroundColor: "#ffd346",
    },
    animation: "pulse 1.5s infinite",
    "@keyframes pulse": {
      "0%": {
        transform: "scale(1)",
        boxShadow: "0 0 0 0 rgba(204, 169, 44, 0.4)",
      },
      "70%": {
        transform: "scale(1.1)",
        boxShadow: "0 0 0 20px rgba(204, 169, 44, 0)",
      },
      "100%": {
        transform: "scale(1)",
        boxShadow: "0 0 0 0 rgba(204, 169, 44, 0)",
      },
    },
  },
};

export default Header;
