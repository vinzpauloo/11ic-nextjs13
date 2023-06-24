import React from 'react'

// ** MUI Imports
import { Box, Typography } from '@mui/material'

// ** Hooks
import { useVIPCardItemContext } from '../VIPCardItem/vipcarditem.context'

type Props = {}

const VIPCardItemLower = (props: Props) => {
    const { nextLevel } = useVIPCardItemContext()
    return (
        <Box className='vip__card__item__content-lower'>

            {
             nextLevel?.label ? 
             <Typography fontSize='13px'>Deposit to qualify for : {nextLevel?.label} </Typography> : null
            }
            

            <Typography fontWeight='700' lineHeight={1} variant='h6'>25,000 INR</Typography>
        </Box>
    )
}

export default VIPCardItemLower