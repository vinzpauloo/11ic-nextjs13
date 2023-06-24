import React from 'react'

// ** MUI Imports
import { Box } from '@mui/material'

import VIPCardItemUpper from './VIPCardItemUpper';
import VIPCardItemNextLevelEstimate from './VIPCardItemNextLevelEstimate';
import VIPCardItemLower from './VIPCardItemLower';

type VIPCardItemContentProps = {}

const VIPCardItemContent = (props: VIPCardItemContentProps) => {
    return (
        <Box className='vip__card__item__content'>

            <VIPCardItemUpper />

            <VIPCardItemNextLevelEstimate />

            <VIPCardItemLower />

        </Box>
    )
}

export default VIPCardItemContent