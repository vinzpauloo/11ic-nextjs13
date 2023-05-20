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

// ** Zustand Store Imports
import { useGlobalStore } from "@/zustand/store";

// ** Custom Components Imports
import LanguageDropdown from "./LanguageDropdown";

// ** Core Imports
import { useSettings } from "@/@core/hooks/useSettings";

// ** Utility Imports
import { useTranslateString } from "@/utils/TranslateString";

// ** Top Level Component
const Header = () => {
  // * Router
  const router = useRouter();

  // * Utils
  const TranslateString = useTranslateString();

  // * Store
  const { settings, saveSettings } = useSettings();
  const { postData, setTitle, title } = useGlobalStore();

  // * States
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
    <Box
      sx={{
        backgroundColor: headerBg,
        position: "fixed",
        width: "100%",
        height: "128px",
        zIndex: 1000, // High z-index to ensure the header is on top
        p: 2,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            flex: { sm: null, md: 1.3, lg: 1.3 },
            display: { sm: "none", md: "block", lg: "block" },
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Image
            src="/images/header/11ic.svg"
            alt="main-logo"
            width={100}
            height={45}
            priority
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.20em",
            flex: 0,
          }}
        >
          <Box
            component="img"
            sx={{
              height: 20,
              width: 20,
              display: {
                xs: "none",
                sm: "block",
                md: "block",
                lg: "block",
              },
            }}
            alt="download"
            src="./images/header/header-download.svg"
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
            onClick={() => router.push("/dashboard")}
          >
            {TranslateString(`Sign Up`)}
          </Button>
          <LanguageDropdown settings={settings} saveSettings={saveSettings} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: 0,
        }}
      >
        <TopTabNavigation />
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
      scrollButtons="auto"
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
  tabs: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: "600",
    fontSize: 12,
    textTransform: "uppercase",
    cursor: "pointer",
    color: "#FFF",
    width: {
      // sm: "200px",
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
      sm: "90px",
      md: "90px",
      lg: "90px",
      xl: "106px",
    },
    height: "36px",
    borderRadius: "16px",
    textTransform: "none",
    fontSize: 12,

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
