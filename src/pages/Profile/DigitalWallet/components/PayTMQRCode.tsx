import React from 'react'

import { Box } from "@mui/material";

// ** Third Party Imports -- NOT FINAL
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// ** Custom Component Imports
import InputField from '@/shared-components/InputField'
import SubmitButton from '../../components/SubmitButton';

type Props = {}

const PayTMQRCode = (props: Props) => {

  // ** React Hook Form
  const {
    control,
    handleSubmit,
    reset,
    clearErrors,
    formState,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  return (
    <Box sx={styles.container}>
      <InputField
        controllerName="accountnumber"
        control={control}
        placeholder="PAYTM QRcode Single Limit: 200.00 - 50,000.00 INR"
        variant="outlined"
        fullWidth={true}
        name="accountnumber"
      />
    </Box>
  )
}

export default PayTMQRCode

const styles = {
  container : {
    display:'grid',
    gap: '.5rem'
  },
  copyBtn : { 
    minWidth : 'initial',
    textTransform : 'none !important'
  }
}