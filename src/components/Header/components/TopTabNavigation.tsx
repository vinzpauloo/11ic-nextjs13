// ** React Imports
import React from "react";

// ** Next Imports
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// ** MUI Imports
import { Box, Tab, Tabs } from "@mui/material";

// ** Custom Component Imports
import { useCheckAuthentication } from "@/hooks/useCheckAuthentication";
import { useAccountStore } from "@/zustand/account-store";

import { decrypt } from "@/utils/encryption";

// ========================================================================

const TopTabNavigation = () => {
  // ** Next **
  const router = useRouter();
  const session = useSession();

  // ** Store **
  const { handleOpen } = useAccountStore((state) => ({
    handleOpen: state.handleOpen,
  }));

  // ** States **
  const [selectedTab, setSelectedTab] = React.useState("1");

  // ** Hooks **
  const { isAuthenticated } = useCheckAuthentication();

  // ** Functions **
  const handleTabChange = async (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    // Check for restricted tabs for unauthenticated users
    if (!isAuthenticated && newValue === "7") {
      handleOpen("login");

      return;
    }

    setSelectedTab(newValue);

    switch (newValue) {
      case "1":
        router.push("/");
        break;
      case "7":
        if (isAuthenticated) {
          router.push("/vip");
        } else {
          router.push("/");
        }
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

  if (session?.data?.acdivo.advP) {
    console.log(`ENCRYPTED`, session.data.acdivo.advP);
    const token = decrypt(session.data.acdivo.advP);
    console.log(`TOKEN`, token);
  } else {
    console.log("No encrypted data found");
  }

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
