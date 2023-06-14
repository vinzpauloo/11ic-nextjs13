"use client"

import React from 'react'

// ** 3rd Party Imports
import Cards, { ReactCreditCardProps } from 'react-credit-cards';

import './cc-styles.css';
import 'react-credit-cards/es/styles-compiled.css';


interface IProps extends ReactCreditCardProps{}

const ReactCreditCard = (props: IProps) => {

    const { cvc, expiry, focused, name, number } = props

    if ( number ) {

        return (
            <div>
                <Cards
                    cvc={cvc && cvc}
                    expiry={expiry && expiry}
                    name={name && name}
                    number={number && number}
                />
            </div>
        )
    }

    return <></>
    
}

export default ReactCreditCard