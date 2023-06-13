import React from 'react'

// ** MUI Components
import { Box } from "@mui/material";

// ** Custom component imports
import FormController from '@/pages/Profile/components/FormController';
import SubmitButton from '@/pages/Profile/components/SubmitButton';
import CreditCardBank from '@/pages/Profile/components/CreditCard/CreditCardBank';
import DepositAmountInput from '@/pages/Profile/components/DepositAmountInput'
import FormTextField from '@/pages/Profile/components/FormTextField';

import Currency from '@/shared-components/Currency';
import ConversionCurrency from '@/shared-components/ConversionCurrency';

type Props = {}

const ContentCryptoWithdrawal = (props: Props) => {
  return (
    <Box sx={styles.container}>
      
      <FormController 
        label={ <div style={styles.label}>
        <span>Deposit Amount - </span>
        <ConversionCurrency />
        </div> }
        render={ () => <DepositAmountInput 
                          placeholderValue='Enter withdrawal amount'
                          currency={ <Currency 
                                prefix='Balance: ' 
                                value={100000} /> }
                        />  
              }
      />

      <FormController 
        label={ <div style={styles.label}>
        <span>USDT Amount - <span style={styles.gold}>0</span> USDT</span>
        </div> }
        render={ () => <CreditCardBank />  }
      />

      <FormController 
        label='Transaction Password'
        render={ () => <FormTextField
                        placeholder='Please Enter Transaction Password'
                        type='text' />  }
      />
      
      <SubmitButton disabled>Submit</SubmitButton>
      
    </Box>
  )
}

export default ContentCryptoWithdrawal

const styles = {
  container : {
    display:'flex',
    gap: '2rem',
    flexDirection : 'column',
  },
  label : {
    color : '#fff',
    marginBottom: '.9rem',
    display:'inline-block',
    fontSize: '13px'
  },
  gold : {
    color : '#F3B867'
  }
}