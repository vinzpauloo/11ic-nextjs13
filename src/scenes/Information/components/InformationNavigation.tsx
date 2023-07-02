// ** React Imports
import React from "react";

// ** Next Imports
import dynamic from "next/dynamic";

// ** MUI Imports
import { Box } from "@mui/material";

// ** Custom Component Imports
import BackdropLoader from "@/shared-components/BackdropLoader";
// import InformationTabs from "./InformationTabs";
const InformationTabs = dynamic(() => import("./InformationTabs"), {
  loading: () => <BackdropLoader description="Loading..." />,
});
const ListButtons = dynamic(() => import("./ListButtons"), {
  loading: () => <BackdropLoader description="Loading..." />,
});

// ** Zustand Imports
import { useInformationStore } from "@/zustand/information-store";

// =================================================================
const InformationNavigation = () => {
  const { display } = useInformationStore();
  return (
    <Box sx={styles.container}>
      <ListButtons />
      <InformationTabs />
      <Box sx={{ display: { xs: "block", md: "none" } }}>{display}</Box>
    </Box>
  );
};

const styles = {
  container: {
    width: {
      xs: "100%",
      md: "40%",
      lg: "40%",
      xl: "30%",
    },
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
};

export default InformationNavigation;
