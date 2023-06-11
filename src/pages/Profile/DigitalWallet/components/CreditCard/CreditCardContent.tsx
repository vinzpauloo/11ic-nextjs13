import React from 'react'

// ** MUI Components
import { Box } from "@mui/material";

type Props = {
    label : string
    content : string
}

const CreditCardContent = (props: Props) => {
    const {label, content} = props
    return (
        <Box sx={styles.container}>
            <Box sx={styles.itemLabel}>{label}</Box>
            <Box sx={styles.item}>{content}</Box>
            <Box sx={styles.copyItem}>
                <Box sx={styles.copyBtn}>Copy</Box>
            </Box>
        </Box>
    )
}

export default CreditCardContent

const styles = {
    container : {
        display:'flex',
        justifyContent : 'space-between',
        alignItems:'center',
        fontSize:'12px',
    },
    copyBtn : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:' 0px 8px',
        width: '44px',
        height: '24px',
        border: '1px solid #fff',
        borderRadius: '100px',
        cursor:'pointer'
    },
    itemLabel : {
        minWidth: '120px'
    },
    item : {
        flex:'auto',
        textAlign:'left',
    },
    copyItem : {
        marginLeft:'auto'
    }
}