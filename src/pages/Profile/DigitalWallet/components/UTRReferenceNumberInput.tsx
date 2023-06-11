import React from 'react'

import { Box } from "@mui/material";

// ** Third Party Imports -- NOT FINAL
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// ** Custom Component Imports
import InputField from '@/shared-components/InputField'

type Props = {}

const UTIReferenceNumberInput = (props: Props) => {

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
        controllerName="utr"
        control={control}
        placeholder="Please Enter the UTR/Reference No."
        variant="outlined"
        fullWidth={true}
        name="accountnumber"
      />
    </Box>
  )
}

export default UTIReferenceNumberInput

const styles = {
  container : {
    display:'grid',
    gridTemplateColumns : ['1fr'],
    gap: '.5rem'
  },
  copyBtn : { 
    minWidth : 'initial',
    textTransform : 'none !important'
  }
}