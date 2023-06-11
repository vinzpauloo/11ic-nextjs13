// ** Next Imports
import { useRouter } from "next/navigation";

// ** MUI Imports
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
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

// ** Zustand Store
import { useProfileStore } from "@/zustand/profile-store";
import DigitalWallet from "../DigitalWallet";

// =================================================================

const ListButtons = () => {
  // ** Next Router **
  const router = useRouter();

  // ** MUI **
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ** Store **
  const { setProfileHeader, setDisplay } = useProfileStore();

  return (
    <List sx={styles.container}>
      {[
        {
          text: "Profile",
          icon: <AccountCircleIcon />,
          navicon: <NavigateNextIcon />,
          path: "/",
        },
        {
          text: "Wallet Management",
          icon: <WalletIcon />,
          navicon: <NavigateNextIcon />,
          path: "/profile/wallet-management",
          web: <DigitalWallet />,
        },
        {
          text: "Transaction Record",
          icon: <ReceiptIcon />,
          navicon: <NavigateNextIcon />,
          path: "/profile/transaction-record",
        },
        {
          text: "Betting Record",
          icon: <CasinoIcon />,
          navicon: <NavigateNextIcon />,
          path: "/",
        },
        {
          text: "Locked Details",
          icon: <LockPersonIcon />,
          navicon: <NavigateNextIcon />,
          path: "/",
        },
        {
          text: "Invite Friends",
          icon: <GroupAddIcon />,
          navicon: <NavigateNextIcon />,
          path: "/",
        },
        {
          text: "Security Center",
          icon: <SecurityIcon />,
          navicon: <NavigateNextIcon />,
          path: "/",
        },
        {
          text: "Message Center",
          icon: <SmsIcon />,
          navicon: <NavigateNextIcon />,
          path: "/",
        },
      ].map((item, index) => (
        <ListItemButton
          key={index}
          sx={styles.button}
          onClick={() => {
            if (isMobile) {
              router.push(`${item.path}`);
              setProfileHeader(`${item.text}`);
            } else {
              setDisplay(item.web);
            }
          }}
        >
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
