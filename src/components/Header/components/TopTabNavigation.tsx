// ** React Imports
import React from "react";

// ** Next Imports
import { useRouter } from "next/navigation";

// ** MUI Imports
import { Box, Tab, Tabs } from "@mui/material";

const TopTabNavigation = () => {
  // ** Next Router **
  const router = useRouter();

  // ** States **
  const [selectedTab, setSelectedTab] = React.useState("1");

  // ** Functions **
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);

    switch (newValue) {
      case "1":
        router.push("/");
        break;
      case "7":
        router.push("/vip");
        break;
      case "8":
        router.push("/promotions");
        break;
      case "10":
        router.push("/blog");
        break;
      default:
        break;
    }
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
  },
};

export default TopTabNavigation;
