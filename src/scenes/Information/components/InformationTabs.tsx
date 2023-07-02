// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Stack, Typography } from "@mui/material";

// ** Zustand Imports
import { useInformationStore } from "@/zustand/information-store";

// ** Custom Component Imports
import About from "../About";
import PrivacyPolicy from "../Privacy";
import FAQ from "../FAQ";
import AffiliateTOS from "../Affiliate";
import TermsAndConditions from "../TermsAndConditions";

// Types
interface TabProps {
  title: string;
  width: string | number;
  tabValue: string;
}

// =================================================================
const InformationTabs = () => {
  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Stack
        direction="row"
        alignItems="center"
        gap={2}
        sx={{ overflowX: "auto", whiteSpace: "nowrap" }}
      >
        <DataGridTab title="About Us" width="100px" tabValue="about" />
        <DataGridTab title="Privacy Policy" width="120px" tabValue="privacy" />
        <DataGridTab
          title="Terms & Conditions"
          width="160px"
          tabValue="terms"
        />
        <DataGridTab title="FAQ" width="100px" tabValue="faq" />
        <DataGridTab
          title="Affiliate Terms & Conditions"
          width="220px"
          tabValue="affiliate"
        />
      </Stack>
    </Box>
  );
};

// =================================================================
function DataGridTab({ title, width, tabValue }: TabProps) {
  const { tabSelected, setDisplay } = useInformationStore();
  const { handleSelectTab } = useInformationStore((state) => ({
    handleSelectTab: state.handleSelectTab,
  }));

  return (
    <Box
      sx={{
        border:
          tabSelected === tabValue ? "1px solid #F3B867" : "1px solid #FFF",
        backgroundColor: tabSelected === tabValue ? "#F3B867" : "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        minWidth: width,
        height: "38px",
        color: tabSelected === tabValue ? "#000" : "#FFF",
        whiteSpace: "nowrap",
      }}
      onClick={() => {
        handleSelectTab(tabValue);
        switch (true) {
          case tabValue === "about":
            setDisplay(<About />);
            break;
          case tabValue === "privacy":
            setDisplay(<PrivacyPolicy />);
            break;
          case tabValue === "terms":
            setDisplay(<TermsAndConditions />);
            break;
          case tabValue === "faq":
            setDisplay(<FAQ />);
            break;
          case tabValue === "affiliate":
            setDisplay(<AffiliateTOS />);
            break;
          default:
            break;
        }
      }}
    >
      <Typography fontFamily="Roboto" fontWeight={900}>
        {title}
      </Typography>
    </Box>
  );
}

export default InformationTabs;
