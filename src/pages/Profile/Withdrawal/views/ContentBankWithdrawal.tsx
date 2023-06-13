import React from 'react'

// ** MUI Components
import { Box } from "@mui/material";

// ** Custom component imports
import FormController from '@/pages/Profile/components/FormController';
import SubmitButton from '@/pages/Profile/components/SubmitButton';
import CreditCardLibrary from '@/pages/Profile/components/CreditCardLibrary/CreditCardLibrary';
import DepositAmountInput from '@/pages/Profile/components/DepositAmountInput'
import FormTextField from '@/pages/Profile/components/FormTextField';

import Currency from '@/shared-components/Currency';


type Props = {}

const ContentBankWithdrawal = (props: Props) => {
  
  
  return (
    <Box sx={styles.container}>
      
      <FormController 
        label='Deposit Amount'
        render={ () => <DepositAmountInput 
                          placeholderValue='Enter withdrawal amount'
                          currency={ <Currency 
                                prefix='Balance: ' 
                                value={100000} /> }
                        />  
              }
      />

      <FormController 
        render={ () => <CreditCardLibrary 
                          creditCards={[{cvc : 11, expiry : 112, name : 'DDDEDE', number:'12121'}]}
                          defaultCard={null}
                        />}
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

export default ContentBankWithdrawal

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
}