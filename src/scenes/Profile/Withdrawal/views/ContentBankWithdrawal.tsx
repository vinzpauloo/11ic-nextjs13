import React from "react";

// ** MUI Components
import { Box } from "@mui/material";

// ** Custom component imports
import FormController from "@/scenes/Profile/components/FormController";
import SubmitButton from "@/scenes/Profile/components/SubmitButton";
import CreditCardLibrary from "@/scenes/Profile/components/CreditCardLibrary/CreditCardLibrary";
import DepositAmountInput from "@/scenes/Profile/components/DepositAmountInput";
import FormTextField from "@/scenes/Profile/components/FormTextField";

import Currency from "@/shared-components/Currency";

type Props = {};

const ContentBankWithdrawal = (props: Props) => {
  return (
    <Box sx={styles.container}>
      <FormController
        label="Deposit Amount"
        render={() => (
          <DepositAmountInput
            placeholderValue="Enter withdrawal amount"
            currency={<Currency prefix="Balance: " value={100000} />}
          />
        )}
      />

      <FormController
        render={() => (
          <CreditCardLibrary
            creditCards={[
              {
                cvc: 11,
                expiry: 112,
                name: "Joe Smith",
                number: "432343235432",
              },
            ]}
            defaultCard={1}
          />
        )}
      />

      <FormController
        label="Transaction Password"
        render={() => (
          <FormTextField
            placeholder="Please Enter Transaction Password"
            type="text"
          />
        )}
      />

      <SubmitButton disabled>Submit</SubmitButton>
    </Box>
  );
};

export default ContentBankWithdrawal;

const styles = {
  container: {
    display: "flex",
    gap: "2rem",
    flexDirection: "column",
  },
  label: {
    color: "#fff",
    marginBottom: ".9rem",
    display: "inline-block",
    fontSize: "13px",
  },
};
