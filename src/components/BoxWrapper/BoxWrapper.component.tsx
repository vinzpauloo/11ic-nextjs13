import React from 'react'

// ** MUI Imports
import { Box, BoxProps } from '@mui/material';

// ** style imports
import { styles } from './boxwrapper.styles'

type BoxWrapperProps = React.PropsWithChildren & BoxProps & {
    darkerBg? : boolean
    noPadding? : boolean
}
type BGValue = 'var(--bg-secondary)' | 'var(--bg-primary)'

const BoxWrapper = (props: BoxWrapperProps) => {
    const {children, sx, darkerBg=false, noPadding=false, ...rest} = props

    const isDarkBg = (flag : boolean) : BGValue => flag ? 'var(--bg-secondary)' : 'var(--bg-primary)'

    const mainStyles = { ...styles.mainContainer, ...sx  }

    return (
        <Box {...rest} sx={{ 
                    background : isDarkBg(darkerBg),
                    ...mainStyles, 
                    ...(noPadding ? { padding : 0 } : {}  ) ,
                }} >{children}</Box>
    )
}

export default BoxWrapper