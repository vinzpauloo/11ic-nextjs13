import React from 'react'

// ** Next
import Image from 'next/image';

// ** MUI imports
import { Box, SxProps } from "@mui/material";

type Props = {
    value : number
    prefix? : string
    //dynamic currency // US INR PHP?
}

const Currency = ({value,prefix}: Props) => {

    const formattedNumber = value.toLocaleString('en-US', {
        style: 'decimal',
        maximumFractionDigits: 2,
    });

    return (
    <Box sx={styles.container}>
        <Image src='/images/currencies/inr.png' alt='' width={15} height={15} />
        <Box sx={styles.span}>{ prefix && prefix } { value && formattedNumber }</Box>
    </Box>
    )
}

export default Currency

const styles : {[key : string] : SxProps} = {
    container : {
        color: "#fff",
        paddingLeft: '12px',
        paddingTop: '12px',
        display: 'flex',
        gap: '.5rem',
        alignContent : 'center',
        alignItems : 'center',
    },
    span : {
        fontSize: '15px'
    }
}