import { ISXStyleType } from "@/types/style-type"

export const styles : ISXStyleType = {
    mainContainer : {
        maxWidth: ['100%'],
        marginInline: 'auto',
        width : '100%',
        paddingTop: ['8rem'],
        paddingInline: {
            xs : '7vw',
            sm : '3vw',
            md : '3vw',
            lg : '10vw',
            xl : '13vw',
        }
    },
    innerContainer : {
        display:'flex',
        flexDirection:'column',
        gap : '1rem',
    }

} 
