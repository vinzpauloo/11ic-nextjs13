import React from 'react'

// ** MUI Imports
import { Button, ButtonProps, SxProps } from "@mui/material";

interface Props extends ButtonProps {
  children : React.ReactNode | string
}

const SubmitButton = (props: Props) => {
  const { children, sx, disabled } = props
  const btnSx : SxProps<any> = { ...styles?.button, ...sx  } // to merge default sx with passed new sx

  return (
    <Button {...props} sx={btnSx} fullWidth variant='contained'>
      {children}
    </Button>
  )
}

export default SubmitButton

const styles : {[key : string] : SxProps} = {
  button : {
    minWidth:'170px',
    borderRadius : '8px',
    fontWeight : 'bold',
    gap: '.7rem',
    justifyContent : 'center',
    backgroundColor : '#F3B867',
    color: '#000000',
    border: '1px solid rgba(71,71,71)',
    padding : '1em 1em',
    textAlign : 'center',
    textTransform : 'uppercase !important',
    boxShadow: 'none',
    '&:hover' : {
      backgroundColor : 'rgba(231,143, 7, .05)',
      border: '1px solid #F3B867',
    },
    "&:disabled": {
        backgroundColor : 'rgba(71,71,71)',
        border: '1px solid rgba(71,71,71)',
        color : 'rgba(255, 255, 255, 0.2)',
    }
  },

}