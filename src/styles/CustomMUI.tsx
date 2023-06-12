// ** MUI Imports
import { MenuItem, Pagination, Select, styled } from "@mui/material";
import { DataGrid, GridFooterContainer } from "@mui/x-data-grid";

export const CustomMUI = () => {
  // =================================================================
  const CustomSelect = styled(Select)({
    color: "#FFF",
    height: "48px",
    fontWeight: 900,
    borderRadius: "8px",
    fontFamily: "Roboto",
    "& .MuiSelect-icon": {
      color: "#FFF",
    },
    border: "1px solid #FFF",
  });

  // =================================================================
  const CustomMenuItem = styled(MenuItem)({
    color: "#FFF",
    backgroundColor: "#333532",
    "&:hover": {
      backgroundColor: "#4a4b49",
    },
    "&.Mui-selected": {
      backgroundColor: "#4a4b49",
      "&:hover": {
        backgroundColor: "#4a4b49",
      },
    },
  });

  // =================================================================
  const StyledDataGrid = styled(DataGrid)({
    border: "none",
    ".MuiDataGrid-columnHeaderTitle": {
      color: "rgba(255, 255, 255, 0.4)",
      fontSize: 14,
    },
    ".MuiDataGrid-cell": {
      color: "#FFF",
      fontSize: 12,
    },
  });

  // =================================================================
  const CustomPaginationStyle = styled(Pagination)({
    "& .MuiPaginationItem-page.Mui-selected": {
      backgroundColor: "#F3B867 !important",
      color: "#000",
      borderRadius: "4px",
    },
    "& .MuiPaginationItem-root": {
      color: "#FFF",
    },
    "& .MuiPaginationItem-ellipsis": {
      color: "rgba(255, 255, 255, 0.4)",
    },
    "& .MuiButtonBase-root:first-child, & .MuiButtonBase-root:last-child": {
      backgroundColor: "#313131",
      borderRadius: "4px",
    },
    marginTop: 25,
  });

  // =================================================================
  const StyledGridFooterContainer = styled(GridFooterContainer)({
    display: "flex",
    justifyContent: "center",
  });

  return {
    CustomSelect,
    CustomMenuItem,
    StyledDataGrid,
    CustomPaginationStyle,
    StyledGridFooterContainer,
  };
};
