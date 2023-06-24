interface IVIPCard {
    title : string
    date : string
    icon : string
    depositForNextLevel : number | 'qualified'
    currency : string
    nextLevel : IVIPLevel
    background? : string
}

interface IVIPLevel {
    title : string
    icon : string
}

interface IVIPCollection {
    collection : IVIPLevel[]
}



// const VIPCardsSlides : IVIPCard[] = [
//     {
//         title : 'VIP 0',

//     },
// ]