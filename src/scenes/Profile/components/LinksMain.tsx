// ** Next Imports
import { useRouter } from "next/navigation";

// ** MUI Imports
import { useMediaQuery, useTheme } from "@mui/material";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import StarRateIcon from "@mui/icons-material/StarRate";
import AddCardIcon from "@mui/icons-material/AddCard";

// ** Custom Component Imports
import DepositWithdrawVIP from "./DepositWithdrawVIP";
import DigitalWallet from "../DigitalWallet";
import Withdrawal from "../Withdrawal";
import TransactionRecord from "../TransactionRecord";

// ** Zustand Store
import { useProfileStore } from "@/zustand/profile-store";
import { useAccountStore } from "@/zustand/account-store";

// ** Hooks Imports
import { useCheckAuthentication } from "@/hooks/useCheckAuthentication";

// =================================================================

const LinksMain = () => {
  // ** Next Router **
  const router = useRouter();

  // ** Hooks **
  const { isAuthenticated } = useCheckAuthentication();

  // ** MUI **
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ** Store **
  const { setProfileHeader, setDisplay } = useProfileStore();
  const { handleOpen } = useAccountStore((state) => ({
    handleOpen: state.handleOpen,
  }));

  return (
    <>
      {[
        {
          title: "Deposit",
          icon: <AccountBalanceWalletIcon sx={styles.iconStyle} />,
          path: "/profile/wallet-management",
          web: <DigitalWallet />,
        },
        {
          title: "Withdraw",
          icon: <StarRateIcon sx={styles.iconStyle} />,
          path: "/profile/withdraw",
          web: <Withdrawal />,
        },
        {
          title: "VIP",
          icon: <AddCardIcon sx={styles.iconStyle} />,
          path: "/vip",
        },
      ].map((item, index) => (
        <DepositWithdrawVIP
          key={index}
          icon={item.icon}
          title={item.title}
          customOnClick={() => {
            if (isMobile && isAuthenticated) {
              router.push(`${item.path}`);
              setProfileHeader(`${item.title}`);
            } else if ( !item.web ) {
              router.push(`${item.path}`);
              setProfileHeader(`${item.title}`);
            } else if (isAuthenticated) {
              setDisplay(item.web);
            } else {
              handleOpen("login");
            }
          }}
          onMouseEnter={() => {
            if (isAuthenticated) {
              router.prefetch(`${item.path}`);
            }
          }}
        />
      ))}
    </>
  );
};

export default LinksMain;

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
  iconStyle: {
    height: 40,
    width: 40,
    color: "#FFF",
  },
};
