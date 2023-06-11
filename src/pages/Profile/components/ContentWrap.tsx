import React from 'react'

// ** MUI Components
import { Box } from "@mui/material";

interface Props extends React.PropsWithChildren {}

const ContentWrap = ({children}: Props) => {
  return (
    <Box sx={styles.container}>{children}</Box>
  )
}

export default ContentWrap

const styles = {
    container : {
        borderRadius : '8px',
        backgroundColor : 'rgba(31,33,27, .8)',
        padding : '1rem',
        width: '100%',
    }
}