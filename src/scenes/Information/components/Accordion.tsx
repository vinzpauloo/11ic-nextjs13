// ** React Imports
import { useState } from "react";

// ** MUI Imports
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// ** Data Imports
import AboutData from "@/data/AboutData";
import PrivacyData from "@/data/PrivacyData";
import TermsAndConditionsData from "@/data/TermsAndConditionsData";
import FAQData from "@/data/FAQData";
import AffiliateData from "@/data/AffiliateData";

// ** Zustand Imports
import { useInformationStore } from "@/zustand/information-store";

// =================================================================
const InformationAccordion = () => {
  // ** Store **
  const { tabSelected } = useInformationStore();

  // Choose the appropriate data based on the selected tab
  let data: any[];
  switch (tabSelected) {
    case "about":
      data = AboutData;
      break;
    case "privacy":
      data = PrivacyData;
      break;
    case "terms":
      data = TermsAndConditionsData;
      break;
    case "faq":
      data = FAQData;
      break;
    case "affiliate":
      data = AffiliateData;
      break;
    default:
      data = AboutData;
      break;
  }

  // ** State **
  const [expanded, setExpanded] = useState(Array(data.length).fill(true));

  // ** Functions **
  const handleChange =
    (index: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(expanded.map((exp, i) => (i === index ? isExpanded : exp)));
    };

  return (
    <>
      {data.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded[index]}
          onChange={handleChange(index)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#FFF" }} />}
            sx={{ backgroundColor: "#313131" }}
          >
            <Typography color="#FFF" fontFamily="Roboto" fontWeight={900}>
              {item.title && index + 1 + "."} {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#313131" }}>
            <Typography color="#FFF" fontFamily="Roboto" fontSize={11}>
              {item.details}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default InformationAccordion;
