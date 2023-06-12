import React from 'react'

type Props = {}

const ConversionCurrency = (props: Props) => {
    return (
    <span style={styles.currency}>Currency (1 USDT = 89 INR)</span>
    )
}

export default ConversionCurrency

const styles = {
    currency : {
        color : "#F3B867"
    }
}