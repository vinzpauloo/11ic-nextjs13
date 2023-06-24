export interface ILevelsMap {
    label : string
    nextLevelThreshold : number
    smallIconPath? : string
    largeIconPath? : string
    cashBackBonusRatio : number
    depositBonusRatio : number
    backgroundImage : string
}

export interface UserVIPData {
    id : number
    currentLevel : number // index of levelsMap
    currentTotalFunds : number
    cardDate : string
}

export const levelsMap : ILevelsMap[] = [
    {
        label : 'VIP 0',
        backgroundImage : '/images/vip/masks/vip0.png',
        nextLevelThreshold : 12,
        smallIconPath : '/images/vip/vip1.png',
        largeIconPath : '/images/vip/crowns/vip0.png',
        cashBackBonusRatio : 10,
        depositBonusRatio : 10,
    },
    {
        label : 'VIP 1',
        backgroundImage : '/images/vip/masks/vip1.png',
        nextLevelThreshold : 12,
        smallIconPath : '/images/vip/vip1.png',
        largeIconPath : '/images/vip/crowns/vip-1.png',
        cashBackBonusRatio : 10,
        depositBonusRatio : 10,
    },
    {
        label : 'VIP 2',
        backgroundImage : '/images/vip/masks/vip2.png',
        nextLevelThreshold : 12,
        smallIconPath : '/images/vip/vip2.png',
        largeIconPath : '/images/vip/crowns/vip2.png',
        cashBackBonusRatio : 10,
        depositBonusRatio : 10,
    },
    {
        label : 'VIP 3',
        backgroundImage : '/images/vip/masks/vip3.png',
        nextLevelThreshold : 12,
        smallIconPath : '/images/vip/vip3.png',
        largeIconPath : '/images/vip/crowns/vip3.png',
        cashBackBonusRatio : 10,
        depositBonusRatio : 10,
    },
    {
        label : 'VIP 4',
        backgroundImage : '/images/vip/masks/vip4.png',
        nextLevelThreshold : 12,
        smallIconPath : '/images/vip/vip4.png',
        largeIconPath : '/images/vip/crowns/vip4.png',
        cashBackBonusRatio : 10,
        depositBonusRatio : 10,
    },
    {
        label : 'VIP 5',
        backgroundImage : '/images/vip/masks/vip5.png',
        nextLevelThreshold : 12,
        smallIconPath : '/images/vip/vip5 - Copy.png',
        largeIconPath : '/images/vip/crowns/vip5.png',
        cashBackBonusRatio : 10,
        depositBonusRatio : 10,
    },
    {
        label : 'VIP 6',
        backgroundImage : '/images/vip/masks/vip6.png',
        nextLevelThreshold : 12,
        smallIconPath : '/images/vip/vip6.png',
        largeIconPath : '/images/vip/crowns/vip6.png',
        cashBackBonusRatio : 10,
        depositBonusRatio : 10,
    },

]


export const userVIPDataDummy : UserVIPData = 
{
    id : 1,
    currentLevel : 0,
    currentTotalFunds : 100,
    cardDate : '2022-04-12 13:37:25',
}
