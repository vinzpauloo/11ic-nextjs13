// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Stack, Typography } from "@mui/material";

// ** Zustand Imports
import { useTransactionRecordStore } from "@/zustand/transaction-record-store";

// Types
interface TabProps {
  title: string;
  width: string | number;
  tabValue: string;
}

// =================================================================
const DataGridTabs = () => {
  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <DataGridTab title="Deposit" width="124px" tabValue="deposit" />
      <DataGridTab title="Withdrawal" width="124px" tabValue="withdraw" />
      <DataGridTab title="Promo Obtained" width="144px" tabValue="promo" />
    </Stack>
  );
};

// =================================================================
function DataGridTab({ title, width, tabValue }: TabProps) {
  const { tabSelected } = useTransactionRecordStore();
  const { handleSelectTab } = useTransactionRecordStore((state) => ({
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
        width: width,
        height: "48px",
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
