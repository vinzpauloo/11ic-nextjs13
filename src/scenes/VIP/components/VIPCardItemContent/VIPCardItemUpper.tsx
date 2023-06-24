import React from 'react'

// ** Next imports
import Image from "next/image";

// ** MUI Imports
import { Box } from '@mui/material'

// Hook imports
import { useVIPCardItemContext } from '../VIPCardItem/vipcarditem.context';

type Props = {}

const VIPCardItemUpper = (props: Props) => {

    const { user, currentLevel } = useVIPCardItemContext()

    return (
        <Box className='vip__card__item__content-upper'>
                
            <Image className='logo' src='/images/11ic-logo.png' alt='' width={40} height={40} />

            <Box className='card-details'>
                <Box className='card-level'>{currentLevel.label}</Box>
                <Box className='card-date'>{user.cardDate}</Box>
            </Box>

            <Box className='crown'>
                <Image src={`${currentLevel.largeIconPath || ''}`} alt='VIP Crown' width={120} height={120} />
            </Box>

        </Box>
    )
}

export default VIPCardItemUpper