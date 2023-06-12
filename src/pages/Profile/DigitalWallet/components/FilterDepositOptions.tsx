import React from 'react'

// ** Next Imports
import Image from "next/image";

// ** MUI imports
import { Box, SxProps } from "@mui/material";

// ** Custom Components
import MenuButton from "@/pages/Profile/components/MenuButton";

const imgpath = '/images/profile/payments'

type Props = {}

const FilterDepositOptions = (props: Props) => {

    const paymentButtons = [
        {id : 1, src : `${imgpath}/unified.png`, alt : 'unified'},
        {id : 2, src : `${imgpath}/paytm.png`, alt : 'paytm'},
        {id : 3, src : `${imgpath}/phonepe.png`, alt : 'phone-pe'},
        {id : 4, src : `${imgpath}/googlepay.png`, alt : 'google-pay'},
        {id : 5, src : `${imgpath}/amazonpay.png`, alt : 'amazon-pay'},
    ]

    return (
        <Box sx={styles.container}>
            {
                paymentButtons.map( btn =>  
                <MenuButton key={btn.id} sx={styles.menuButton}>
                    <Image src={`${btn.src}`} alt={btn.alt}  width={100} height={42} />
                </MenuButton>)
            }
            
        </Box>
    )
}

export default FilterDepositOptions

const styles : {[key : string] : SxProps} = {
    container : {
        display:'flex',
        gap: '1rem'
    },
    menuButton : { 
        minWidth : 'initial',
        height: 'initial',
        padding:0,
        backgroundColor : 'rgb(20,20,20)',
        paddingInline : '.8em',
        paddingBlock : '.4em',
        justifyContent: 'center'
    }
}