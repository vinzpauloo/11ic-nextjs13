"use client"

import React from 'react'

// ** MUI Components
import { Box } from "@mui/material";

// ** Custom Components
import FilterPaymentOptions from '../components/FilterPaymentOptions'
import AccountNumberInput from '../components/AccountNumberInput'
import DepositAmountInput from '../components/DepositAmountInput'
import ProofOfTransaction from '../components/ProofOfTransaction'
import SubmitButton from '@/pages/Profile/components/SubmitButton';
import FormController from '../components/FormController';

type Props = {}

const ContentDigitalWallet = (props: Props) => {
  return (
    <Box sx={styles.container}>
      
      <FormController 
        render={ () => <FilterPaymentOptions />  }
      />
      <FormController 
        label='Account Number'
        render={ () => <AccountNumberInput />  }
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

export default ContentDigitalWallet

const styles = {
  container : {
    display:'flex',
    gap: '2rem',
    flexDirection : 'column',
  }
}