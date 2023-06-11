import React from 'react'

type Props = {
    label? : string
    render : () => string | React.ReactNode
}

const FormController = (props: Props) => {
    const { label, render } = props
    return (
    <div>
        { label && <label style={styles.label}>{label}</label> }
        { render() }
    </div>
    )
}

export default FormController

const styles = {
    label : {
        color : '#fff',
        marginBottom: '.9rem',
        display:'inline-block',
        fontSize: '13px'
    }
}