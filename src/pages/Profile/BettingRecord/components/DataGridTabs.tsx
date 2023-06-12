// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Stack, Typography } from "@mui/material";

// ** Zustand Imports
import { useBettingRecordStore } from "@/zustand/betting-record-store";

// Types
interface TabProps {
  title: string;
  width: string | number;
  tabValue: string;
}

// =================================================================
const DataGridTabs = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      sx={{ overflowX: "auto", whiteSpace: "nowrap" }}
    >
      <DataGridTab title="All" width="54px" tabValue="all" />
      <DataGridTab title="Live Casino" width="100px" tabValue="casino" />
      <DataGridTab title="Sports" width="100px" tabValue="sports" />
      <DataGridTab title="Lottery" width="100px" tabValue="lottery" />
      <DataGridTab title="Cards" width="100px" tabValue="cards" />
      <DataGridTab title="Vegas" width="100px" tabValue="vegas" />
    </Stack>
  );
};

// =================================================================
function DataGridTab({ title, width, tabValue }: TabProps) {
  const { tabSelected } = useBettingRecordStore();
  const { handleSelectTab } = useBettingRecordStore((state) => ({
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
      onClick={() => handleSelectTab(tabValue)}
    >
      <Typography fontFamily="Roboto" fontWeight={900}>
        {title}
      </Typography>
    </Box>
  );
}

export default DataGridTabs;
