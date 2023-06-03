// ** React Imports
import React from "react";

// ** Next Imports
import { useRouter } from "next/navigation";

// ** MUI Imports
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import PersonIcon from "@mui/icons-material/Person";

const MobileBottomNavigation = () => {
  // ** Next Router **
  const router = useRouter();

  // ** States **
  const [value, setValue] = React.useState(0);

  // ** Functions **
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        router.push("/");
        break;
      case 1:
        alert(`Sports, still unavailable`);
        break;
      case 2:
        router.push("/profile/deposit");
        break;
      case 3:
        router.push("/promotions");
        break;
      case 4:
        router.push("/profile");
        break;
      default:
        break;
    }
  };

  return (
    <Paper sx={styles.container} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleTabChange}
        sx={styles.navigationWrapper}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon fontSize="large" />}
          sx={styles.navigationBtn}
        />
        <BottomNavigationAction
          label="Sports"
          icon={<SportsSoccerIcon fontSize="large" />}
          sx={styles.navigationBtn}
        />
        <BottomNavigationAction
          label="Deposit"
          icon={<AccountBalanceWalletIcon fontSize="large" />}
          sx={styles.navigationBtn}
        />
        <BottomNavigationAction
          label="Promo"
          icon={<LocalActivityIcon fontSize="large" />}
          sx={styles.navigationBtn}
        />
        <BottomNavigationAction
          label="Profile"
          icon={<PersonIcon fontSize="large" />}
          sx={styles.navigationBtn}
        />
      </BottomNavigation>
    </Paper>
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9000,
    display: {
      xs: "block",
      sm: "none",
    },
  },
  navigationWrapper: {
    background: "rgba(33, 31, 27, 0.8);",
    backdropFilter: "blur(9px)",
    ".Mui-selected": {
      color: `#F3B867 !important`,
    },
  },
  navigationBtn: {
    minWidth: "0px",
  },
};

export default MobileBottomNavigation;
