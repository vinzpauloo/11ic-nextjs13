// ** React Imports
import React from "react";

// ** Next Imports
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// ** MUI Imports
import { Box, Tab, Tabs } from "@mui/material";

// ** Custom Component Imports
import { useCheckAuthentication } from "@/hooks/useCheckAuthentication";

// ** Utils Imports
import { decrypt } from "@/utils/encryption";

// ** Zustand Imports
import { useAccountStore } from "@/zustand/account-store";
import { useMainStore } from "@/zustand/main-store";

// ** Constant Imports
import {
  tabLabels,
  tabRoutes,
  restrictedValues,
} from "@/constants/TopTabNavConstants";

// ========================================================================
const TopTabNavigation = () => {
  // ** Next **
  const router = useRouter();
  const session = useSession();

  // ** Store **
  const { handleOpen } = useAccountStore((state) => ({
    handleOpen: state.handleOpen,
  }));
  const { setMainHeader } = useMainStore();

  // ** States **
  const [selectedTab, setSelectedTab] = React.useState("1");

  // ** Hooks **
  const { isAuthenticated } = useCheckAuthentication();

  // ** Functions **
  const handleTabChange = async (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    // Define the list of unavailable tabs
    const unavailableTabs = ["2", "3", "4", "5", "6", "9"];

    // Check if newValue is in the list of unavailable tabs
    if (isAuthenticated && unavailableTabs.includes(newValue)) {
      alert("Not available at the moment");
      return;
    }

    // Check for restricted tabs for unauthenticated users
    if (!isAuthenticated && restrictedValues.includes(newValue)) {
      handleOpen("login");
      return;
    }

    setSelectedTab(newValue);

    /* The condition is checking if the user is not authenticated (`!isAuthenticated`) or if the `newValue` (selected
   tab) does not have a corresponding route in the `tabRoutes` object (`!tabRoutes[newValue as keyof
   typeof tabRoutes]`). */
    if (!isAuthenticated || !tabRoutes[newValue as keyof typeof tabRoutes]) {
      router.push("/");
    } else {
      const label = tabLabels[newValue as keyof typeof tabLabels];
      localStorage.setItem("mainHeader", label);
      setMainHeader(label);
      router.push(tabRoutes[newValue as keyof typeof tabRoutes]);
    }
  };

  // ** Decrypt Token For Session
  if (session?.data?.acdivo.advP) {
    // console.log(`ENCRYPTED`, session.data.acdivo.advP);
    const token = decrypt(session.data.acdivo.advP);
    // console.log(`TOKEN`, token);
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
