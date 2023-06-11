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

const AccountNumberInput = (props: Props) => {

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
        placeholder="UPI:8956703556@freecharge"
        variant="outlined"
        fullWidth={true}
        name="accountnumber"
      />
      <SubmitButton sx={styles.copyBtn}>Copy</SubmitButton>
    </Box>
  )
}

export default AccountNumberInput

const styles = {
  container : {
    display:'grid',
    gridTemplateColumns : ['10fr 2fr'],
    gap: '.5rem'
  },
  copyBtn : { 
    minWidth : 'initial',
    textTransform : 'none !important'
  }
}