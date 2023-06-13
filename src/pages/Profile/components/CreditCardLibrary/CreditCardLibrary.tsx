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
    defaultCard : number | null
}

const CreditCardLibrary = ({creditCards, defaultCard}: ICCLibrary) => {

    const [defaultCardNumber, setDefaultCardNumber ] = React.useState<number | null>(defaultCard ?? null)

    if ( creditCards ) {

        console.log("WHAT IS THE DEFAULT CARD NUMBER", defaultCardNumber)

        return (
            <Box>
                { creditCards.map( cc => (
                    <ReactCreditCard 
                        key={cc.number}
                        cvc={cc.cvc}   
                        expiry={cc.expiry}   
                        name={cc.name}   
                        number={cc.number}   
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