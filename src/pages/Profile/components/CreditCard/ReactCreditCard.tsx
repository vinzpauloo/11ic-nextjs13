import React from 'react'

// ** 3rd Party Imports
import Cards, { ReactCreditCardProps } from 'react-credit-cards';

import './cc-styles.css';
import 'react-credit-cards/es/styles-compiled.css';


interface IProps extends ReactCreditCardProps{}

const ReactCreditCard = (props: IProps) => {

    const { cvc, expiry, focused, name, number } = props

    return (
        <div>
            <Cards
                cvc={cvc}
                expiry={expiry}
                name={name}
                number={number}
            />
        </div>
    )
}

export default ReactCreditCard