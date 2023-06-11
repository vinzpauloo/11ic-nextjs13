"use client"

import React from 'react'

// ** MUI Components
import { Box } from "@mui/material";

// ** Custom Components
import FilterTokenOptions from '../components/FilterTokenOptions'
import TokenAddress from '../components/TokenAddress/TokenAddress';
import DepositAmountInput from '../components/DepositAmountInput'
import ProofOfTransaction from '../components/ProofOfTransaction'
import SubmitButton from '@/pages/Profile/components/SubmitButton';
import FormController from '../components/FormController';


type Props = {}

const ContentUSDT = (props: Props) => {
  return (
    <Box sx={styles.container}>
      
      <FormController 
        render={ () => <FilterTokenOptions />  }
      />
      <FormController 
        render={ () => <TokenAddress />  }
      />

      <FormController 
        label='Deposit Amount'
        render={ () => <DepositAmountInput />  }
      />

      <FormController 
        label='Proof of Transaction'
        render={ () => <ProofOfTransaction />  }
      />
    
      

      <SubmitButton disabled>Submit</SubmitButton>
      
    </Box>
  )
}

export default ContentUSDT

const styles = {
  container : {
    display:'flex',
    gap: '2rem',
    flexDirection : 'column',
  }
}