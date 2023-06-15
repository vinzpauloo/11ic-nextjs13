import { MenuItem, Select, styled } from "@mui/material";

// =================================================================
export const AnnouncementModalMUI = () => {
  // ** Select ** --------------------------------
  const CustomSelect = styled(Select)({
    backgroundColor: "#333333",
    color: "#FFF",
    fontWeight: 900,
    height: "30px",
    borderRadius: "20px",
    fontFamily: "Roboto",
    "& .MuiSelect-icon": {
      color: "#FFF",
    },
    boxShadow: "none",
    ".MuiOutlinedInput-notchedOutline": { border: 0 },
    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
  });

  // ** Menu Item ** --------------------------------
  const CustomMenuItem = styled(MenuItem)({
    color: "#FFF",
    backgroundColor: "#333532",
    "&:hover": {
      backgroundColor: "#4a4b49",
    },
    "&.Mui-selected": {
      backgroundColor: "#4a4b49",
      color: "#F3B867",
      "&:hover": {
        backgroundColor: "#4a4b49",
      },
    },
    justifyContent: "center",
  });

  return {
    CustomSelect,
    CustomMenuItem,
  };
};
