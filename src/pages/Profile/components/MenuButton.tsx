import React from 'react'

// ** MUI Imports
import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  children : React.ReactNode | string
}

const MenuButton = (props: Props) => {
  const { children, onClick } = props
  return (
    <Button onClick={onClick} sx={styles.button} fullWidth variant='contained'>
      {children}
    </Button>
  )
}

export default MenuButton

const styles = {
  button : {
    minWidth:'170px',
    borderRadius : '8px',
    gap: '.7rem',
    justifyContent : 'flex-start',
    backgroundColor : 'rgba(31,33,27, .8)',
    border: '1px solid #424852',
    padding : '1em 1em',
    textAlign : 'left',
    textTransform : 'none !important',
    '&:hover' : {
      backgroundColor : 'rgba(231,143, 7, .05)',
      border: '1px solid #F3B867',
    }
  }
}