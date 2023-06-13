import React from 'react'

// ** MUI imports
import { Box, FormControl, SxProps } from "@mui/material";


// ** Third Party Imports -- NOT FINAL
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// ** Custom Component Imports
import MenuButton from './MenuButton';
import FormTextField from './FormTextField';

type Props = {
  currency? : React.ReactNode
  depositAmounts? : string[] | [] 
  placeholderValue? : string
}



const DepositAmountInput = (props: Props) => {

  const { depositAmounts, placeholderValue='Deposit Limit 500.00 - 50,000.00' } = props

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
      <Box sx={styles.depositContainer}>
        {
          depositAmounts && depositAmounts.map( amt => <MenuButton key={amt} sx={styles.btn}>{amt}</MenuButton> )
        }
      </Box>

      <FormControl sx={styles.control} variant='outlined'>
        {
          props.currency && props.currency
        }
        <FormTextField
          noBorder
          placeholder={placeholderValue}
          type='tel'
        ></FormTextField>
      </FormControl>
      
    </Box>
  )
}

export default DepositAmountInput

const styles :{[key : string] : SxProps} = {
  container : {
    display:'flex',
    flexDirection :'column',
    gap: '1rem'
  },
  depositContainer : {
    display:'flex',
    gap: '1rem'
  },
  btn : {
    minWidth : 'initial',
    fontWeight:'bold',
    justifyContent :'center'
  },
  control : {
    borderRadius : '8px',
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(25px)",
  },
  field : {
    border: 'none',
    outline : 'none',
    borderRadius : '8px',
    '& fieldset' : {
      border: 'none',
      outline : 'none'
    },
    '& input' : {
      color: "rgba(255, 255, 255, 0.6)",
      fontWeight: 400,
    }
  },
}