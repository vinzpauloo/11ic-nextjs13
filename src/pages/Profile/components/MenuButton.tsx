import React from 'react'

// ** MUI Imports
import { Button, ButtonProps, SxProps } from "@mui/material";

interface Props extends ButtonProps {
  children : React.ReactNode | string
}

const MenuButton = (props: Props) => {
  const { children, sx } = props
  const btnSx : SxProps<any> = { ...styles?.button, ...sx } // to merge default sx with passed new sx

  return (
    <Button {...props} sx={btnSx} fullWidth variant='contained'>
      {children}
    </Button>
  )
}

export default MenuButton

const styles : {[key : string] : SxProps} = {
  button : {
    minWidth:'170px',
    borderRadius : '8px',
    gap: '.7rem',
    justifyContent : 'flex-start',
    backgroundColor : 'rgba(31,33,27)',
    border: '1px solid #424852',
    padding : '1em 1em',
    textAlign : 'left',
    textTransform : 'none !important',
    boxShadow: 'none',
    '&:hover' : {
      backgroundColor : 'rgba(231,143, 7, .05)',
      border: '1px solid #F3B867',
      color : '#F3B867'
    }
  }
}