import React from 'react'

// ** MUI Components
import { Box } from "@mui/material";

// ** Custom components
import CreditCardContent from './CreditCardContent';

type Props = {}

const bankDetails = [
  {
    id : 1,
    label : 'Bank Name',
    content : 'KOTAK BANK'
  },
  {
    id : 2,
    label : 'Account Name',
    content : 'HARSHA MALVIYA'
  },
  {
    id : 3,
    label : 'Account Number',
    content : '1114686586'
  },
  {
    id : 4,
    label : 'IFSC Code',
    content : 'KKBK0001829'
  },
]

const CreditCardBank = (props: Props) => {
  return (
    <Box sx={styles.cc}>
      <Box sx={styles.innerContainer}>
        {
          bankDetails.map(
            item => 
              <CreditCardContent 
                key={item.id}
                label={item.label}
                content={item.content}
              />
          )
        }
      </Box>
    </Box>
  )
}

export default CreditCardBank

const styles = {

    cc : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '24px',
        gap: '14px',
        width: '343px',
        height: '168px',
        background: 'linear-gradient(118.89deg, #2E4F62 0%, #677A8C 100%)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '8px',
    },
    innerContainer : {
      display:'flex',
      flexDirection : 'column',
      justifyContent:'space-between',
      color: 'rgba(255, 255, 255, 0.8)',
      width:'100%',
      height:'100%'
    }

}