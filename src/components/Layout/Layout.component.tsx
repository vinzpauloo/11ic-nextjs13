import React from 'react'

// ** MUI Imports
import { Box, BoxProps, SxProps } from '@mui/material';

// ** style imports
import { styles } from './layout.styles'

type LayoutProps = BoxProps & React.PropsWithChildren & {
    innerStyles? : SxProps
}

const Layout = (props: LayoutProps) => {
    const {children, sx, innerStyles, ...rest} = props
    const mainStylesOverall = {...sx, ...styles.mainContainer}
    const innerStylesOverall = {...innerStyles, ...styles.innerContainer}

    return (
        <Box sx={mainStylesOverall} {...rest}>
            <Box sx={innerStylesOverall}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout