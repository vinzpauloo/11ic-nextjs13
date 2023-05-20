"use client";
// ** React Imports
import React from "react";

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

import { useGlobalStore } from "@/zustand/store";
import LanguageDropdown from "./LanguageDropdown";
import { useSettings } from "@/@core/hooks/useSettings";
import { useTranslateString } from "@/utils/TranslateString";

// ** Top Level Component
const Header = () => {
  const TranslateString = useTranslateString();
  const { settings, saveSettings } = useSettings();
  const router = useRouter();
  const { postData, setTitle, title } = useGlobalStore();

  const [headerBg, setHeaderBg] = React.useState("rgba(33, 31, 27, 0.8)");

  const listenScrollEvent = () => {
    if (window.scrollY < 5) {
      return setHeaderBg("rgba(33, 31, 27, 0.8)");
    } else if (window.scrollY > 5) {
      return setHeaderBg("transparent");
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <Box sx={{ ...styles.container, backgroundColor: headerBg }}>
      <Box sx={styles.spacer}></Box>
      <Box sx={styles.middleBox}>
        <Image
          src="/images/header/11ic.svg"
          alt="main-logo"
          width={200}
          height={45}
          priority
        />
        <TopTabNavigation />
      </Box>
      <Box sx={styles.rightBox}>
        <Image
          src="./images/header/header-download.svg"
          alt="download"
          width={20}
          height={20}
        />
        <Button
          variant="contained"
          sx={styles.loginButton}
          onClick={() => router.push("/dashboard")}
        >
          {TranslateString(`Login`)}
        </Button>
        <Button
          variant="contained"
          sx={styles.signUpButton}
          onClick={() => router.push("/users/1")}
        >
          {TranslateString(`Sign Up`)}
        </Button>
        <LanguageDropdown settings={settings} saveSettings={saveSettings} />
      </Box>
    </Box>
  );
};

// ** Child Components **
function TopTabNavigation() {
  const [selectedTab, setSelectedTab] = React.useState("1");
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  return (
    <Tabs
      orientation="horizontal"
      variant="scrollable"
      value={selectedTab}
      onChange={handleTabChange}
      sx={{
        ".Mui-selected": {
          color: `#F3B867 !important`,
        },
      }}
      TabIndicatorProps={{
        style: {
          backgroundColor: "#F3B867",
        },
      }}
    >
      <Tab value="1" label="Home" sx={styles.tabs} />
      <Tab value="2" label="Sports" sx={styles.tabs} />
      <Tab value="3" label="Live Casino" sx={styles.tabs} />
      <Tab value="4" label="Rummy" sx={styles.tabs} />
      <Tab value="5" label="Slots" sx={styles.tabs} />
      <Tab value="6" label="Lottery" sx={styles.tabs} />
      <Tab value="7" label="VIP" sx={styles.tabs} />ß
      <Tab value="8" label="Promotions" sx={styles.tabs} />
      <Tab value="9" label="Commission" sx={styles.tabs} />
      <Tab value="10" label="Blog" sx={styles.tabs} />
    </Tabs>
  );
}

// ** Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "fixed",
    width: "100%",
    height: "128px",
    zIndex: 1000, // High z-index to ensure the header is on top
    p: 2,
  },
  tabs: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: "600",
    fontSize: 12,
    textTransform: "uppercase",
    cursor: "pointer",
    color: "#FFF",
  },
  loginButton: {
    color: "#F3B867",
    backgroundColor: "#000",
    border: "1px solid #F3B867",
    width: "106px",
    height: "36px",
    borderRadius: "16px",
    textTransform: "none",
  },
  signUpButton: {
    color: "#000",
    backgroundColor: "#F3B867",
    width: "106px",
    height: "36px",
    borderRadius: "16px",
    textTransform: "none",

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
  spacer: {
    flex: 1,
  },

  middleBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  rightBox: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "0.60em",
    flex: 1,
  },
};

export default Header;
