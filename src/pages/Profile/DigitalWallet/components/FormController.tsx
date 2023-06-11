
import React from 'react'

interface IProps  {
    label? : string
    render : () => string | React.ReactNode
}

const FormController = ({label,render}: IProps) => {
    return (
        <div>
            { label && <label style={styles.label}>{label}</label> }
            { render && render() }
        </div>
    )
}

const styles = {
    label : {
        color : '#fff',
        marginBottom: '.9rem',
        display:'inline-block',
        fontSize: '13px'
    }
}

export default FormController

