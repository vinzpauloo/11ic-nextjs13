export const VIPLevels : string[] = [
    'Sports',
    'Live Casino',
    'Rummy',
    'Slots',
    'Lottery'
]


type VIPPackageType = {
    levelName : string
    sports? : number
    liveCasino? : number
    rummy? : number
    slots? : number
    lottery? : number
    crown : string
}

export const VIPPackagesData : VIPPackageType[] = [
    {   
        levelName : 'VIP 1',
        sports : undefined,
        liveCasino : undefined,
        rummy : undefined,
        slots : undefined,
        lottery : undefined,
        crown : '/images/vip/vip1.png'
    },
    {   
        levelName : 'VIP 2',
        sports : 0.30,
        liveCasino : 0.30,
        rummy : 0.30,
        slots : 0.30,
        lottery : 0.30,
        crown : '/images/vip/vip2.png'
    },
    {   
        levelName : 'VIP 3',
        sports : 0.50,
        liveCasino : 0.50,
        rummy : 0.50,
        slots : 0.50,
        lottery : 0.50,
        crown : '/images/vip/vip3.png'
    },
    {   
        levelName : 'VIP 4',
        sports : 0.80,
        liveCasino : 0.80,
        rummy : 0.80,
        slots : 0.80,
        lottery : 0.80,
        crown : '/images/vip/vip4.png'
        
    },
    {   
        levelName : 'VIP 5',
        sports : 1.10,
        liveCasino : 1.10,
        rummy : 1.10,
        slots : 1.10,
        lottery : 1.10,
        crown : '/images/vip/vip5 - Copy.png'
    },
    {   
        levelName : 'VIP 6',
        sports : 1.50,
        liveCasino : 1.50,
        rummy : 1.50,
        slots : 1.50,
        lottery : 1.50,
        crown : '/images/vip/vip6.png'
    },
    
]   