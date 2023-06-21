import { SxProps } from "@mui/material"


export const styles : {[key : string] : SxProps} = {
    tableHeading : {
        padding : {
            xs : '.5rem',
            md : '1rem'
        },
        display:'grid',
        gap: '.5rem',
        justifyContent:'center',
        alignContent : 'center',
        justifyItems : 'center',
        minHeight: {
            md : '120px'
        },
        borderBottom : '1px solid var(--border-clr-primary)',
        '@media screen and (max-width: 600px)' : {
            '& img' : {
                display : 'none'
            }
        },
        fontSize : {
            xs : '8px',
            md : '13px'
        },
    },
    tableCol : {
        color :'var(--clr-white-300)',
        borderBottom : '1px solid var(--border-clr-primary)',
        padding : '.7rem .5rem',
        fontSize : {
            xs : '8px',
            md : '13px'
        },
        flex : {
            xs : '1'
        }
    }
}   

export const sxStyles : {[key : string] : SxProps} = {
    mainBoxWrap : {
        border : '1px solid var(--border-clr-primary)', borderRadius : '16px',
        '& > div:first-child > div:last-child' : {
            borderBottomLeftRadius : {
                md : '16px'
            },
        },
        '& > div:last-child > div:last-child' : {
            borderBottomRightRadius : '16px',
        },
        '@media screen and (max-width: 600px)': {
            '&' : {
                display : 'flex',
                flexDirection : 'column',
            },
            '& > div' : {
                display: 'flex',
            }
        },
        
    },
    packageBox : {
        '> div:first-of-type' : {
            flex : {
                xs : '1'
            },
        },
        '> div:last-of-type' : {
            border: {
                md : 'none'
            },
        },
        '&:last-of-type > div:first-of-type' : {
            borderBottomLeftRadius : {
                xs : '16px',
                md : 0
            }
        }
    }
}
