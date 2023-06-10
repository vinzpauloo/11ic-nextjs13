// ** MUI Imports
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WalletIcon from "@mui/icons-material/Wallet";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CasinoIcon from "@mui/icons-material/Casino";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SecurityIcon from "@mui/icons-material/Security";
import SmsIcon from "@mui/icons-material/Sms";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// =================================================================

const ListButtons = () => {
  return (
    <List sx={styles.container}>
      {[
        {
          text: "Profile",
          icon: <AccountCircleIcon />,
          navicon: <NavigateNextIcon />,
        },
        {
          text: "Wallet Management",
          icon: <WalletIcon />,
          navicon: <NavigateNextIcon />,
        },
        {
          text: "Transaction Record",
          icon: <ReceiptIcon />,
          navicon: <NavigateNextIcon />,
        },
        {
          text: "Betting Record",
          icon: <CasinoIcon />,
          navicon: <NavigateNextIcon />,
        },
        {
          text: "Locked Details",
          icon: <LockPersonIcon />,
          navicon: <NavigateNextIcon />,
        },
        {
          text: "Invite Friends",
          icon: <GroupAddIcon />,
          navicon: <NavigateNextIcon />,
        },
        {
          text: "Security Center",
          icon: <SecurityIcon />,
          navicon: <NavigateNextIcon />,
        },
        {
          text: "Message Center",
          icon: <SmsIcon />,
          navicon: <NavigateNextIcon />,
        },
      ].map((item, index) => (
        <ListItemButton key={index} sx={styles.button}>
          <ListItemIcon sx={{ minWidth: 30, ...styles.white }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} />
          <ListItemIcon sx={{ minWidth: 0, ...styles.white }}>
            {item.navicon}
          </ListItemIcon>
        </ListItemButton>
      ))}
    </List>
  );
};

const styles = {
  container: {
    backgroundColor: "#3A3D39",
    color: "#FFF",
    borderRadius: "8px",
  },
  button: {
    mb: 1,
  },
  white: {
    color: "#FFF",
  },
};

export default ListButtons;
