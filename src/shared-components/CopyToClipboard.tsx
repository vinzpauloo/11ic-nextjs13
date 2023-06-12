import React from 'react'

// ** MUI Imports
import { Box, Typography, TextField, IconButton, InputAdornment  } from "@mui/material";
import { FileCopy, FileCopyOutlined } from '@mui/icons-material'

import { CopyToClipboard as CopyToClipboardMain } from 'react-copy-to-clipboard';


type Props = {
  value : string
}

const CopyToClipboard = ({value}: Props) => {

  const [copy,setCopy] = React.useState<boolean>(false)

  return (
    <Box>
      <CopyToClipboardMain text={value}
        onCopy={ cpy => setCopy(true) }
      >
        <TextField
          sx={styles.container}
          value={value}
          InputProps={{
            style: styles.input,
            endAdornment: 
            <InputAdornment 
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                cursor:'pointer',
              }}
              position='end'> {
                copy ? <FileCopy /> : <FileCopyOutlined />
              }</InputAdornment>,
          }}
          />
      </CopyToClipboardMain>
    </Box>
    
  )
}

export default CopyToClipboard

const styles = {
  container : {
    border: `1px solid rgba(255, 255, 255, 0.1)`,
    borderRadius : '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    width:'100%'
  },
  input : {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize : '13px',
  }
}