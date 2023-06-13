import React from 'react'

// ** MUI Imports
import { TextField, SxProps } from "@mui/material";

type Props = {
    placeholder? : string
    type : string
    noBorder? : boolean
}

const FormTextField = ({placeholder='', type='text', noBorder}: Props) => {
  return (
    <TextField
        sx={ noBorder ? styles.fieldNoBorder : styles.field}
        placeholder={placeholder}
        type={type}
    ></TextField>
  )
}

export default FormTextField

const styles :{[key : string] : SxProps} = {
    container : {
        display:'flex',
        flexDirection :'column',
        gap: '1rem'
    },
    fieldNoBorder : {
        border: 'none',
        outline : 'none',
        borderRadius : '8px',
        '& fieldset' : {
        border: 'none',
        outline : 'none'
        },
        '& input' : {
        color: "rgba(255, 255, 255, 0.6)",
        fontWeight: 400,
        }
    },
    field : {
        border: 'none',
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(25px)",
        outline : 'none',
        borderRadius : '8px',
        '& fieldset' : {
        border: 'none',
        outline : 'none'
        },
        '& input' : {
        color: "rgba(255, 255, 255, 0.6)",
        fontWeight: 400,
        }
    },
}