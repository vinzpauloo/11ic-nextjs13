// ** Next Imports
import { useRouter } from "next/navigation";

// ** Custom Component Imports
import About from "@/scenes/Information/About";
import PrivacyPolicy from "@/scenes/Information/Privacy";
import TOS from "@/scenes/Information/TermsAndConditions";
import AffiliateTOS from "@/scenes/Information/Affiliate";
import FAQ from "@/scenes/Information/FAQ";

// ** Zustand Imports
import { useMainStore } from "@/zustand/main-store";
import { useInformationStore } from "@/zustand/information-store";

// =================================================================
const InformationData = () => {
  // ** NextJS Router **
  const router = useRouter();

  // ** Zustand Store **
  const { setMainHeader } = useMainStore();
  const { setTabSelected, setDisplay, setSelected } = useInformationStore();

  return [
    {
      firstTitle: "Blog",
      secondTitle: "About Us",
      firstSxTitle: styles.blog,
      secondSxTitle: styles.titles,
      firstOnClick: () => {
        setMainHeader("Help Center");
        localStorage.setItem("mainHeader", "Help Center");
        router.push("/information");
      },
      secondOnClick: () => {
        setSelected(0);
        setDisplay(<About />);
        setTabSelected("about");
        setMainHeader("Help Center");
        localStorage.setItem("mainHeader", "Help Center");
        router.push("/information");
      },
    },
    {
      firstTitle: "Privacy Policy",
      secondTitle: "Terms & Conditions",
      firstSxTitle: styles.titles,
      secondSxTitle: styles.titles,
      firstOnClick: () => {
        setSelected(1);
        setDisplay(<PrivacyPolicy />);
        setTabSelected("privacy");
        setMainHeader("Help Center");
        localStorage.setItem("mainHeader", "Help Center");
        router.push("/information");
      },
      secondOnClick: () => {
        setSelected(2);
        setDisplay(<TOS />);
        setTabSelected("tos");
        setMainHeader("Help Center");
        localStorage.setItem("mainHeader", "Help Center");
        router.push("/information");
      },
    },
    {
      firstTitle: "FAQ",
      secondTitle: "Affiliate",
      firstSxTitle: styles.titles,
      secondSxTitle: styles.titles,
      firstOnClick: () => {
        setSelected(3);
        setDisplay(<FAQ />);
        setTabSelected("faq");
        setMainHeader("Help Center");
        localStorage.setItem("mainHeader", "Help Center");
        router.push("/information");
      },
      secondOnClick: () => {
        setSelected(4);
        setDisplay(<AffiliateTOS />);
        setTabSelected("affiliate");
        setMainHeader("Help Center");
        localStorage.setItem("mainHeader", "Help Center");
        router.push("/information");
      },
    },
  ];
};

const styles = {
  blog: {
    display: { xs: "block", sm: "none" },
    fontSize: "12px",
    color: "#FFF",
    cursor: "pointer",
  },
  titles: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    gap: { xs: 1, sm: 5 },
    cursor: "pointer",
    color: "#FFF",
    fontSize: 12,
  },
};

export default InformationData;
