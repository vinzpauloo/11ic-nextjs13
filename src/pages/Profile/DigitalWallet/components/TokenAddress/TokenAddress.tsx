import React from 'react'

// ** MUI Components
import { Box, Typography, SxProps } from "@mui/material";

// ** Custom component imports
import QRCodeDisplay from '@/shared-components/QRCodeDisplay'
import CopyToClipboard from '@/shared-components/CopyToClipboard';

type Props = {}

const usdt_address = 'TTrFj8Z5XrUM45eXUuwaQLAYBznMbWb23p'

const TokenAddress = (props: Props) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.innerContainer}>
        <Box sx={styles.qrCodeContainer}>
          <QRCodeDisplay value={usdt_address} />
        </Box>
        <Box sx={styles.control}>
          <Typography color='#F3B867' variant='body2'>USDT Address</Typography>
            <CopyToClipboard value={usdt_address} />
        </Box>
      </Box>
    </Box>
  )
}

export default TokenAddress

const styles : {[key : string] : SxProps} = {
  container : {
    display:'flex',
    alignItems: 'center'
  },
  innerContainer : {
    backgroundColor : '#171717', // should be global color
    display:'flex',
    alignItems: 'center',
    gap : '1rem',
    padding: '1.6rem',
    borderRadius : '16px'
  },
  qrCodeContainer : {
    backgroundColor : '#fff',
    maxWidth: '85px',
    padding: '0.3rem',
    paddingBottom: '0',
    borderRadius : '8px'
  },
  control : {
    display:'flex',
    flexDirection : 'column',
    gap: '.7rem',
    width : [,,'320px']
  }
}