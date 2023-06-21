import React from 'react'

// ** Next
import Image from 'next/image';

// ** MUI Imports
import { Box, SxProps} from "@mui/material";

// ** Data
import { VIPPackagesData, VIPLevels } from '@/data/VIPPackagesData';

// ** Custom Component Imports
import BoxWrapper from '@/components/BoxWrapper/BoxWrapper.component';

// ** Style imports
import { styles, sxStyles } from './vippackagestable.styles';

type Props = {}

const VIPPackagesTable = (props: Props) => {
    return (
            <BoxWrapper color='white' display='flex' textAlign='center' darkerBg noPadding sx={{mt : ['1rem',,'1.5rem']}}>

                <Box width='100%' display="grid" gridTemplateColumns="repeat(7, 1fr)" 
                    sx={sxStyles.mainBoxWrap}>

                    <Box sx={sxStyles.packageBox}>
                        <Box sx={styles.tableHeading}>LEVEL</Box>
                        {   
                            VIPLevels.map( lvl => <Box sx={styles.tableCol} key={lvl}>{lvl}</Box> )
                        }
                    </Box>
                    {
                        VIPPackagesData.map( (level,index) => (
                            <Box sx={sxStyles.packageBox} key={index}>
                                <Box sx={styles.tableHeading}>
                                    <Image src={level.crown} alt={level.crown} width={40} height={40} />
                                    {level.levelName}
                                </Box>
                                <Box sx={styles.tableCol}>{level.sports ?? '-'}</Box>
                                <Box sx={styles.tableCol}>{level.liveCasino ?? '-'}</Box>
                                <Box sx={styles.tableCol}>{level.rummy ?? '-'}</Box>
                                <Box sx={styles.tableCol}>{level.slots ?? '-'}</Box>
                                <Box sx={styles.tableCol}>{level.lottery ?? '-'}</Box>
                            </Box>
                        ))
                    }

                </Box>

            </BoxWrapper>
        
    )
}

export default VIPPackagesTable

