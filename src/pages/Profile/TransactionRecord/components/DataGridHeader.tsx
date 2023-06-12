// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DateRangeIcon from "@mui/icons-material/DateRange";

// ** Zustand Store Imports
import { useTransactionRecordStore } from "@/zustand/transaction-record-store";
import DataGridTabs from "./DataGridTabs";

// ** Style Imports
import { CustomMUI } from "../../../../styles/CustomMUI";

// =================================================================
const DataGridHeader = () => {
  // ** Styles **
  const { CustomMenuItem, CustomSelect } = CustomMUI();
  // ** Store **
  const { days } = useTransactionRecordStore();
  const { handleChange } = useTransactionRecordStore((state) => ({
    handleChange: state.handleChange,
  }));

  return (
    <Box sx={styles.container}>
      <DataGridTabs />

      <CustomSelect
        value={days}
        onChange={handleChange}
        IconComponent={ArrowDropDownIcon}
        renderValue={(selected) => (
          <Box style={styles.select}>
            <DateRangeIcon />
            <Typography fontFamily="Roboto" fontWeight={600}>
              {selected as React.ReactNode} Days
            </Typography>
          </Box>
        )}
        MenuProps={{
          PaperProps: { style: { paddingTop: 0, paddingBottom: 0 } },
        }}
      >
        <CustomMenuItem value={3}>3 Days</CustomMenuItem>
        <CustomMenuItem value={7}>7 Days</CustomMenuItem>
        <CustomMenuItem value={30}>30 Days</CustomMenuItem>
        <CustomMenuItem value={90}>90 Days</CustomMenuItem>
      </CustomSelect>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    pb: 5,
  },
  select: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    width: 100,
  },
};

export default DataGridHeader;
