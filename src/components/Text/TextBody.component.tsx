import React from 'react'

// ** MUI Imports
import { Typography, TypographyProps } from "@mui/material";

// ** style imports
import { styles } from './textbody.styles'

type TextBodyProps = React.PropsWithChildren & TypographyProps

const TextBody = (props: TextBodyProps) => {
    const {children, ...rest} = props

    return (
        <Typography sx={styles.mainContainer}>
            {children}
        </Typography>
    )
}

export default TextBody