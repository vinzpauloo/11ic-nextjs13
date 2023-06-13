"use client"

import React from 'react'

// ** MUI Components
import { Box } from "@mui/material";

// ** Custom Components
import FilterDepositOptions from '../components/FilterDepositOptions'
import AccountNumberInput from '../components/AccountNumberInput'
import DepositAmountInput from '@/pages/Profile/components/DepositAmountInput'
import ProofOfTransaction from '../components/ProofOfTransaction'
import SubmitButton from '@/pages/Profile/components/SubmitButton';
import FormController from '../../components/FormController';

type Props = {}

const depositAmounts = ['100,000', '500,000', '1,000,000', '2,000,000', '50,000,000', '100,000,000']

const ContentDigitalWallet = (props: Props) => {
  return (
    <Box sx={styles.container}>
      
      <FormController 
        render={ () => <FilterDepositOptions />  }
      />
      <FormController 
        label='Account Number'
        render={ () => <AccountNumberInput />  }
      />

      <FormController 
        label='Deposit Amount'
        render={ () => <DepositAmountInput depositAmounts={depositAmounts} />  }
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