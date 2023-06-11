import React from 'react'

// ** MUI imports
import { Box, SxProps } from "@mui/material";

// ** Custom Components
import MenuButton from "@/pages/Profile/components/MenuButton";

const imgpath = '/images/profile/icons'

type Props = {}

const FilterTokenOptions = (props: Props) => {

    const tokens = [
        {id : 1, text : 'ERC-20' },
        {id : 2, text : 'TRC-20' },
    ]

    return (
        <Box sx={styles.container}>
            {
                tokens.map( token =>  
                <MenuButton key={token.id} sx={styles.menuButton}>
                    <Box>{token.text}</Box>
                </MenuButton>)
            }
            
        </Box>
    )
}

export default FilterTokenOptions

const styles : {[key : string] : SxProps} = {
    container : {
        display:'flex',
        gap: '1rem'
    },
    menuButton : { 
        minWidth: 'initial',
        width : '137px',
        height: 'auto',
        padding:0,
        backgroundColor : 'rgb(20,20,20)',
        paddingInline : '.8em',
        paddingBlock : '1em',
        justifyContent: 'center'
    }
}