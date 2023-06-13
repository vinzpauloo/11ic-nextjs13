"use client"

import React from 'react'

// ** MUI Components
import { Box } from "@mui/material";

// ** Import custom components
import ReactCreditCard from '@/pages/Profile/components/CreditCard/ReactCreditCard';

// ** 3rd party components
import { ReactCreditCardProps } from 'react-credit-cards';

interface ICCLibrary {
    creditCards : ReactCreditCardProps[]
    defaultCard : number 
}

const CreditCardLibrary = ({creditCards, defaultCard}: ICCLibrary) => {

    // const [defaultCardNumber, setDefaultCardNumber ] = React.useState<number | null>(defaultCard ?? null)

    if ( creditCards ) {

        return (
            <Box>
                { creditCards.map( cc => (
                    <ReactCreditCard 
                        key={cc.number && cc.number}
                        cvc={cc.cvc && cc.cvc}   
                        expiry={cc.expiry && cc.expiry}   
                        name={cc.name && cc.name}   
                        number={cc.number && cc.number}   
                    />
                )) }
            </Box>
        )
    }

    return (
        <div>No cards</div>
    )
    
}

export default CreditCardLibrary