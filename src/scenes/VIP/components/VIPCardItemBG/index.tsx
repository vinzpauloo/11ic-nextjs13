import React from 'react'

import { Box } from '@mui/material'

// ** types
import { levelsMap } from '@/data/VIPCardsData'

// ** Hooks
import { useVIPCardItemContext } from '../VIPCardItem/vipcarditem.context'

type Props = React.PropsWithChildren & {}

const VIPCardItemBG = ({children}: Props) => {

    const { currentLevel  } = useVIPCardItemContext()

    return (
        <Box 
            className='vip__card__item' 
            sx={{backgroundImage : `url("${currentLevel.backgroundImage}")`}}>{children}
        </Box>
    )
}

export default VIPCardItemBG