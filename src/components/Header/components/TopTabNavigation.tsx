// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Tab, Tabs } from "@mui/material";

const TopTabNavigation = () => {
  const [selectedTab, setSelectedTab] = React.useState("1");
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={styles.tabsWrapper}>
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
    </Box>
  );
};

const styles = {
  // Tabs
  tabsWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 0,
  },
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
};

export default TopTabNavigation;
