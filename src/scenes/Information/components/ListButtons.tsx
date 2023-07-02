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
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import InfoIcon from "@mui/icons-material/Info";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import GavelIcon from "@mui/icons-material/Gavel";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";

// ** Custom Component Imports
import About from "../About";
import PrivacyPolicy from "../Privacy";
import TermsAndConditions from "../TermsAndConditions";
import FAQ from "../FAQ";
import AffiliateTOS from "../Affiliate";

// ** Zustand Store
import { useInformationStore } from "@/zustand/information-store";
import { useAccountStore } from "@/zustand/account-store";

// ** Hooks Imports
import { useCheckAuthentication } from "@/hooks/useCheckAuthentication";

// =================================================================

const ListButtons = () => {
  // ** Next Router **
  const router = useRouter();

  // ** Hooks **
  const { isAuthenticated } = useCheckAuthentication();

  // ** MUI **
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ** Store **
  const {
    setProfileHeader,
    setDisplay,
    selected,
    setSelected,
    setTabSelected,
  } = useInformationStore();
  const { handleOpen } = useAccountStore((state) => ({
    handleOpen: state.handleOpen,
  }));

  return (
    <List sx={styles.container}>
      {[
        {
          text: "About Us",
          icon: <InfoIcon />,
          navicon: <NavigateNextIcon />,
          path: "/",
          web: <About />,
          tab: "about",
        },
        {
          text: "Privacy Policy",
          icon: <PrivacyTipIcon />,
          navicon: <NavigateNextIcon />,
          path: "/",
          web: <PrivacyPolicy />,
          tab: "privacy",
        },
        {
          text: "Terms & Conditions",
          icon: <GavelIcon />,
          navicon: <NavigateNextIcon />,
          path: "/",
          web: <TermsAndConditions />,
          tab: "terms",
        },
        {
          text: "FAQ",
          icon: <LiveHelpIcon />,
          navicon: <NavigateNextIcon />,
          path: "/",
          web: <FAQ />,
          tab: "faq",
        },
        {
          text: "Affiliate Terms & Conditions",
          icon: <AssuredWorkloadIcon />,
          navicon: <NavigateNextIcon />,
          path: "/",
          web: <AffiliateTOS />,
          tab: "affiliate",
        },
      ].map((item, index) => (
        <ListItemButton
          key={index}
          sx={{
            ...styles.button,
            color: selected === index ? "#F3B867" : "inherit",
          }}
          onMouseEnter={() => {
            if (isAuthenticated) {
              router.prefetch(`${item.path}`);
            }
          }}
          onClick={() => {
            if (isMobile && isAuthenticated) {
              router.push(`${item.path}`);
              setProfileHeader(`${item.text}`);
            } else if (isAuthenticated) {
              setDisplay(item.web);
            } else {
              handleOpen("login");
            }
            setSelected(index);
            setTabSelected(item.tab);
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 30,
              color: selected === index ? "#F3B867" : "inherit",
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} />
          <ListItemIcon
            sx={{
              minWidth: 0,
              color: selected === index ? "#F3B867" : "inherit",
            }}
          >
            {item.navicon}
          </ListItemIcon>
        </ListItemButton>
      ))}
    </List>
  );
};

const styles = {
  container: {
    backgroundColor: "#292929",
    color: "#FFF",
    borderRadius: "8px",
    minHeight: "835px",
    display: {
      xs: "none",
      md: "block",
    },
  },
  button: {
    mb: 1,
  },
};

export default ListButtons;
