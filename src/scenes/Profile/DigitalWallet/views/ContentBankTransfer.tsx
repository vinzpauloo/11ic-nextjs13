import React from "react";

// ** MUI Components
import { Box } from "@mui/material";

// ** Custom C
import CreditCardBank from "@/scenes/Profile/components/CreditCard/CreditCardBank";
import UTRReferenceNumberInput from "../components/UTRReferenceNumberInput";
import DepositAmountInput from "@/scenes/Profile/components/DepositAmountInput";
import ProofOfTransaction from "../components/ProofOfTransaction";
import SubmitButton from "@/scenes/Profile/components/SubmitButton";
import FormController from "@/scenes/Profile/components/FormController";

type Props = {};

const depositAmounts = [
  "100,000",
  "500,000",
  "1,000,000",
  "2,000,000",
  "50,000,000",
  "100,000,000",
];

const ContentBankTransfer = (props: Props) => {
  return (
    <Box sx={styles.container}>
      <FormController render={() => <CreditCardBank />} />

      <FormController
        label="Deposit Amount"
        render={() => <DepositAmountInput depositAmounts={depositAmounts} />}
      />

      <FormController
        label="Account Number"
        render={() => <UTRReferenceNumberInput />}
      />

      <FormController
        label="Proof of Transaction"
        render={() => <ProofOfTransaction />}
      />

      <SubmitButton disabled>Submit</SubmitButton>
    </Box>
  );
};

export default ContentBankTransfer;

const styles = {
  container: {
    display: "flex",
    gap: "2rem",
    flexDirection: "column",
  },
};
