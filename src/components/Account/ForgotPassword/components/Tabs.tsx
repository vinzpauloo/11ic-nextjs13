// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Tab, Tabs } from "@mui/material";
import { useAccountStore } from "@/zustand/account-store";

// ========================================================================

const ForgotPasswordTabs = () => {
  // ** Store **
  const { forgotPasswordTab, setForgotPasswordTab } = useAccountStore();

  // ** Functions **
  const handleTabChange = async (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setForgotPasswordTab(newValue);
  };

  return (
    <Box sx={styles.tabsWrapper}>
      <Tabs
        orientation="horizontal"
        variant="scrollable"
        scrollButtons="auto"
        value={forgotPasswordTab}
        onChange={handleTabChange}
        sx={{
          ".Mui-selected": {
            color: `#FFF !important`,
          },
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#FFF",
          },
        }}
      >
        <Tab value="1" label="SMS Recovery" sx={styles.tabs} />
        <Tab value="2" label="Email Recovery" sx={styles.tabs} />
      </Tabs>
    </Box>
  );
};

const styles = {
  tabsWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 0,
    mb: 5,
  },
  tabs: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: 18,
    textTransform: "capitalize",
    cursor: "pointer",
    color: "#5d5e5d",
  },
};

export default ForgotPasswordTabs;
