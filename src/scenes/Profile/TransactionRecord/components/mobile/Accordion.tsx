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
import MockDepositData from "@/data/DepositData";
import MockWithdrawData from "@/data/WithdrawData";
import MockPromoData from "@/data/PromoData";

// ** Zustand Imports
import { useTransactionRecordStore } from "@/zustand/transaction-record-store";

// ** Utils Imports
import formatDate from "@/utils/formatDate";

// ** Types
interface RowDataType {
  type: string;
  status: string;
  order_number: string;
  time: string;
  amount: number;
  id: string;
  currency?: string;
  transfer_amount?: string;
}

// =================================================================
const TransactionRecordAccordion = () => {
  // ** Mock Data **
  const depositData = MockDepositData();
  const withdrawData = MockWithdrawData();
  const promoData = MockPromoData();

  // ** State **
  const [depositStateData] = useState(() => depositData);
  const [withdrawStateData] = useState(() => withdrawData);
  const [promoStateData] = useState(() => promoData);
  const [expanded, setExpanded] = useState<string | false>(false);

  // ** Store **
  const { tabSelected } = useTransactionRecordStore();

  // Choose the appropriate data based on the selected tab
  let data: { rows: RowDataType[] };
  switch (tabSelected) {
    case "deposit":
      data = depositStateData;
      break;
    case "withdraw":
      data = withdrawStateData;
      break;
    case "promo":
      data = promoStateData;
      break;
    default:
      data = depositStateData;
      break;
  }

  // ** Functions **
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

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
                  {formatDate(row.time)}
                </Typography>
                <Stack direction="row" gap={2}>
                  <Avatar
                    alt="deposit-icon"
                    src="/images/header/deposit-icon.png"
                    sx={{ width: 20, height: 20 }}
                  />
                  <Typography color="#FFF" fontFamily="Roboto">
                    {row.amount}
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
            {tabSelected === "deposit" && (
              <>
                <Typography color="#FFF" fontFamily="Roboto">
                  Order Number: {row.order_number}
                </Typography>
                <Typography color="#FFF" fontFamily="Roboto">
                  Currency Used: {row.currency} <br />
                </Typography>
              </>
            )}
            {tabSelected === "withdraw" && (
              <>
                <Typography color="#FFF" fontFamily="Roboto">
                  Order Number: {row.order_number}
                </Typography>
                <Typography color="#FFF" fontFamily="Roboto">
                  Currency Used: {row.currency} <br />
                </Typography>
                <Typography color="#FFF" fontFamily="Roboto">
                  Transfer Amount: {row.transfer_amount} <br />
                </Typography>
              </>
            )}
            {tabSelected === "promo" && (
              <>
                <Typography color="#FFF" fontFamily="Roboto">
                  Order Number: {row.order_number}
                </Typography>
              </>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default TransactionRecordAccordion;
