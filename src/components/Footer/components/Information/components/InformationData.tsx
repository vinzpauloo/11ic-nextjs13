// ** Next Imports
import { useRouter } from "next/navigation";

// ** Zustand Imports
import { useMainStore } from "@/zustand/main-store";

// =================================================================
const InformationData = () => {
  // ** NextJS Router **
  const router = useRouter();

  // ** Zustand Store **
  const { setMainHeader } = useMainStore();

  return [
    {
      firstTitle: "Blog",
      secondTitle: "About Us",
      firstSxTitle: styles.blog,
      secondSxTitle: styles.titles,
      firstOnClick: () => {
        setMainHeader("Blog");
        localStorage.setItem("mainHeader", "Blog");
        router.push("/information/blog");
      },
      secondOnClick: () => {
        setMainHeader("About Us");
        localStorage.setItem("mainHeader", "About Us");
        router.push("/information/about");
      },
    },
    {
      firstTitle: "Privacy Policy",
      secondTitle: "Terms & Conditions",
      firstSxTitle: styles.titles,
      secondSxTitle: styles.titles,
      firstOnClick: () => {
        setMainHeader("Privacy Policy");
        localStorage.setItem("mainHeader", "Privacy Policy");
        router.push("/information/privacy-policy");
      },
      secondOnClick: () => {
        setMainHeader("Terms & Conditions");
        localStorage.setItem("mainHeader", "Terms & Conditions");
        router.push("/information/tos");
      },
    },
    {
      firstTitle: "FAQ",
      secondTitle: "Affiliate",
      firstSxTitle: styles.titles,
      secondSxTitle: styles.titles,
      firstOnClick: () => {
        setMainHeader("FAQ");
        localStorage.setItem("mainHeader", "FAQ");
        router.push("/information/faq");
      },
      secondOnClick: () => {
        setMainHeader("Affiliate");
        localStorage.setItem("mainHeader", "Affiliate");
        router.push("/information/affiliate");
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
