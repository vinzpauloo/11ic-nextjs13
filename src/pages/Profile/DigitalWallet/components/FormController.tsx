
import React from 'react'

interface IProps  {
    label? : string | React.ReactNode
    render : () => string | React.ReactNode
}

const FormController = ({label,render}: IProps) => {



    return (
        <div>
            { label && 
                ( typeof label == 'string' ) 
                ? 
                <label style={styles.label}>{label}</label> 
                : label  
            }
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

