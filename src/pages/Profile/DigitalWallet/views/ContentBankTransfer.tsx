import React from 'react'

// ** MUI Components
import { Box } from "@mui/material";

// ** Custom C
import CreditCardBank from '../components/CreditCard/CreditCardBank';
import UTRReferenceNumberInput from '../components/UTRReferenceNumberInput';
import DepositAmountInput from '../components/DepositAmountInput'
import ProofOfTransaction from '../components/ProofOfTransaction'
import SubmitButton from '@/pages/Profile/components/SubmitButton';
import FormController from '../components/FormController';

type Props = {}

const ContentBankTransfer = (props: Props) => {


  return (
    <Box sx={styles.container}>
      
      <FormController 
        render={ () => <CreditCardBank />  }
      />
      
      <FormController 
        label='Deposit Amount'
        render={ () => <DepositAmountInput />  }
      />

      <FormController 
        label='Account Number'
        render={ () => <UTRReferenceNumberInput />  }
      />

      <FormController 
        label='Proof of Transaction'
        render={ () => <ProofOfTransaction />  }
      />
    
      

      <SubmitButton disabled>Submit</SubmitButton>
      
    </Box>
  )
}

export default ContentBankTransfer

const styles = {
  container : {
    display:'flex',
    gap: '2rem',
    flexDirection : 'column',
  }
}