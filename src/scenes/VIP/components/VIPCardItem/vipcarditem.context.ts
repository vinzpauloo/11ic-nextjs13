import React from 'react'

import { UserVIPData } from '@/data/VIPCardsData'
import { levelsMap } from '@/data/VIPCardsData'

const VIPCardItemContext = React.createContext<{ user : UserVIPData, cardLevel : number } | null>(null)



export const useVIPCardItemContext = () => {
    const context = React.useContext(VIPCardItemContext)

    if ( !context ) {
        throw new Error('Something went wrong')
    }

    const {user, cardLevel} = context
    const currentLevel = levelsMap[cardLevel]
    const maxLevelIndex = levelsMap.length - 1

    // next level is only possible if not VIP 0 or Max VIP Level
    const nextLevel = (cardLevel != 0 || cardLevel != maxLevelIndex ) ? levelsMap[cardLevel + 1] : null

    return {user, currentLevel, nextLevel}
}

export default VIPCardItemContext