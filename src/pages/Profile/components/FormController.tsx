
import React from 'react'

// ** MUI imports
import { Box } from "@mui/material";

interface IProps  {
    label? : string | React.ReactNode
    render : () => string | React.ReactNode
}

const FormController = ({label,render}: IProps) => {

    return (
        <Box sx={styles.container}>
            { label && 
                ( typeof label == 'string' ) 
                ? 
                <label style={styles.label}>{label}</label> 
                : label  
            }
            { render && render() }
        </Box>
    )
}

const styles = {
    container : {
        display:'flex',
        flexDirection: 'column'
    },
    label : {
        color : '#fff',
        marginBottom: '.9rem',
        display:'inline-block',
        fontSize: '13px'
    }
}

export default FormController

