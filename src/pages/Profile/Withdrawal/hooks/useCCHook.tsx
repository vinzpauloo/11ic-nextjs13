"use client"

import React from 'react'

// ** Types
import { ReactCreditCardProps } from 'react-credit-cards';

// ** Mock data api call
const arrayCreditCard : ReactCreditCardProps[] = [
    {
        name : 'HARSHA MALVIYA',
        cvc : 989,
        expiry : 1212,
        number : 134312341343555
    },
    {
        name : 'JUAN DELA CRUZ',
        cvc : 133,
        expiry : 2024,
        number : 4343546532431234
    },
]

const useCCHook = () => {

    const [ cards, setCards ] = React.useState<ReactCreditCardProps[]>(arrayCreditCard)

    return { cards, setCards }
}

export default useCCHook