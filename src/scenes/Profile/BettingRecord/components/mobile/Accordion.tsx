// ** React Imports
import React, { useState } from "react";

// ** MUI Imports
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// ** Data Imports
import MockLiveCasinoData from "@/data/LiveCasinoData";

// ** Zustand Imports
import { useBettingRecordStore } from "@/zustand/betting-record-store";

// =================================================================
const BettingRecordAccordion = () => {
  // ** Mock Data **
  const liveCasinoData = MockLiveCasinoData();

  // ** State **
  const [liveStateCasinoData] = useState(() => liveCasinoData);
  const [sportsStateData] = useState(() => liveCasinoData);
  const [lotteryStateData] = useState(() => liveCasinoData);
  const [cardsStateData] = useState(() => liveCasinoData);
  const [vegasStateData] = useState(() => liveCasinoData);
  const [allStateData] = useState(() => liveCasinoData);
  const [expanded, setExpanded] = useState<string | false>(false);

  // ** Store **
  const { tabSelected } = useBettingRecordStore();

  // ** Functions **
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  // Choose the appropriate data based on the selected tab
  let data;
  switch (tabSelected) {
    case "casino":
      data = liveStateCasinoData;
      break;
    case "sports":
      data = sportsStateData;
      break;
    case "lottery":
      data = lotteryStateData;
      break;
    case "cards":
      data = cardsStateData;
      break;
    case "vegas":
      data = vegasStateData;
      break;
    case "all":
      data = allStateData;
      break;
    default:
      data = allStateData;
      break;
  }

  return (
    <>
      {data.rows.map((row, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#FFF" }} />}
            sx={{ backgroundColor: "#202020" }}
          >
            <Stack width="100%">
              <Stack direction="row" justifyContent="space-between">
                <Typography color="#FFF" fontFamily="Roboto">
                  {row.amount}
                </Typography>
                <Stack direction="row" gap={2}>
                  <Avatar
                    alt="deposit-icon"
                    src="/images/header/deposit-icon.png"
                    sx={{ width: 20, height: 20 }}
                  />
                  <Typography
                    sx={{
                      color: row.dividend_amount.startsWith("-")
                        ? "#F44336"
                        : "#4CAF50",
                    }}
                    fontFamily="Roboto"
                  >
                    {row.dividend_amount}
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography color="#FFF" fontFamily="Roboto">
                  Type: {row.type}
                </Typography>
                <Typography
                  sx={{
                    color:
                      row.status === "Success"
                        ? "#4CAF50"
                        : row.status === "Failed"
                        ? "#F44336"
                        : "#FFC107",
                  }}
                  fontFamily="Roboto"
                >
                  <span style={{ color: "#FFF" }}>Status:</span> {row.status}
                </Typography>
              </Stack>
            </Stack>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#202020" }}>
            <Typography color="#FFF" fontFamily="Roboto">
              Order Number: {row.betting_slip_number}
            </Typography>
            <Typography color="#FFF" fontFamily="Roboto">
              Currency Used: {row.platform} <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default BettingRecordAccordion;
