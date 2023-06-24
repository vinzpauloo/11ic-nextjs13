import React from 'react'

// ** Next imports
import Image from "next/image";

// ** MUI Imports
import { Box, LinearProgress, SxProps, Typography } from '@mui/material'

// ** Custom Hooks
import { useVIPCardItemContext } from '../VIPCardItem/vipcarditem.context';

type Props = {}


const VIPCardItemNextLevelEstimate = (props: Props) => {

    const { nextLevel } = useVIPCardItemContext()

    return (
        <Box className='vip__card__item__content-middle'>
            <LinearProgress sx={styles.progress} variant="determinate" className='progress' value={10} />
            <Box className='next_level'>
                {
                    nextLevel &&
                    <Image alt='' width={10} height={10} src={`${nextLevel. smallIconPath}`} />
                }

            
                <Typography fontSize='11px' color='white'>
                    {
                        nextLevel && nextLevel.label
                    }
                </Typography>
                
            </Box>
        </Box>
    )
}

export default VIPCardItemNextLevelEstimate

const styles : {[key : string] : SxProps} = {
    progress : {
        backgroundColor : 'rgba(0, 0, 0, 0.20)',
        '& .MuiLinearProgress-bar' : {
            backgroundColor : '#fff'
        }
    }
}