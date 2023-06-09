import React from 'react'

// ** Next Imports
import Image from "next/image";

// ** MUI Components
import { Box,Typography } from "@mui/material";

type Props = {}

const ProofOfTransaction = (props: Props) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.boxUpload}>
        <Image src='/images/profile/dropzone.png' alt='dropzone' width={20} height={20} />
      </Box>
      <Typography 
        mt={2}
        variant='caption' 
        sx={{color:' rgba(255, 255, 255, 0.4)'}}>Image size suggest: 1 MB Support formats: JPG, PNG, GIF, BMP</Typography>
    </Box>
  )
}

export default ProofOfTransaction

const styles = {
  container : {
    display:'flex',
    flexDirection : 'column'
  },
  boxUpload : {
    padding:'2em',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    border: '1px dashed rgba(255, 255, 255, 0.15)',
    borderRadius: '16px',
    maxWidth:'100px',
    width: '80px',
    height: '80px',
  }
}


