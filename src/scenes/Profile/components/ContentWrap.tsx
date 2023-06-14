import React from 'react'

// ** MUI Components
import { Box } from "@mui/material";

interface Props {
  children : React.ComponentType | React.ReactNode
}

const ContentWrap = ({children}: Props) => {
  return (
    <Box sx={styles.container}>{children as any}</Box>
  )
}

export default ContentWrap

const styles = {
    container : {
        borderRadius : '8px',
        backgroundColor : {
          xs : 'none',
          md : 'rgba(31,33,27, .8)'
        },
        padding : {
          xs : '0rem',
          md : '1rem',
        },
        width: '100%',
    }
}