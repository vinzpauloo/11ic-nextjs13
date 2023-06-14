"use client";

import React from "react";

// ** MUI Components
import { Box } from "@mui/material";

// ** Custom Components
import FilterPaymentOptions from "../components/FilterPaymentOptions";
import PayTMQRCode from "../components/PayTMQRCode";
import DepositAmountInput from "@/scenes/Profile/components/DepositAmountInput";
import ProofOfTransaction from "../components/ProofOfTransaction";
import SubmitButton from "@/scenes/Profile/components/SubmitButton";
import FormController from "../../components/FormController";

type Props = {};

const depositAmounts = [
  "100,000",
  "500,000",
  "1,000,000",
  "2,000,000",
  "50,000,000",
  "100,000,000",
];

const ContentOnlinePay = (props: Props) => {
  return (
    <Box sx={styles.container}>
      <FormController render={() => <FilterPaymentOptions />} />
      <FormController render={() => <PayTMQRCode />} />

      <FormController
        label="Deposit Amount"
        render={() => <DepositAmountInput depositAmounts={depositAmounts} />}
      />

      <SubmitButton disabled>Submit</SubmitButton>
    </Box>
  );
};

export default ContentOnlinePay;

const styles = {
  container: {
    display: "flex",
    gap: "2rem",
    flexDirection: "column",
  },
};
