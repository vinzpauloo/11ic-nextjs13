import React from 'react'

// ** MUI Imports
import VIPCardItemContent from '../VIPCardItemContent';

// types
import { UserVIPData } from '@/data/VIPCardsData';
import VIPCardItemContext from './vipcarditem.context';
import VIPCardItemBG from '../VIPCardItemBG';

type VIPCardItemProps = {
    userVIPData : UserVIPData
    cardLevel : number
}

const VIPCardItem = ({userVIPData, cardLevel}: VIPCardItemProps) => {
    return (
        <VIPCardItemContext.Provider 
            value={{
                user : userVIPData, 
                cardLevel : cardLevel
            }}>
            <VIPCardItemBG>
                <VIPCardItemContent />
            </VIPCardItemBG>
        </VIPCardItemContext.Provider>
    )
}

export default VIPCardItem