"use client";

import React from 'react'

// ** Next Imports
import { useRouter } from 'next/navigation';

// ** MUI Imports
import { Box, Typography } from "@mui/material";

type Props = {
    heading : string | React.ReactNode
    render : ( routeTo : ( str : string ) => React.ComponentType ) => string | React.ReactNode | any
    views : { [key: string] :  React.ComponentType}
}

const ListMenuButtons = (props: Props) => {
    const { heading, render, views } = props

    const router = useRouter();

    const routeTo = (componentInString : string) => {
        return views[componentInString]
    }

    return (
    <Box sx={styles.container}>
        <Typography component='h2' sx={styles.heading}>{heading}</Typography>
        <Box sx={styles.leftButtonWrapper}>
            { render &&  render(routeTo)}
        </Box>
    </Box>
    )
}

export default ListMenuButtons

const styles = {
    container : {
        display:'flex',
        flexDirection: 'column',
        gap: {
            xs : '1.5rem',
            md : '2.5rem'
        },
    },
    heading : {
        color : '#fff',
        fontWeight: '700',
        textAlign : {
            xs : 'center',
            md : 'left'
        },
    },
    leftButtonWrapper : {
        display:'flex',
        flexDirection : {
            xs : 'row',
            md : 'column'
        },
        gridTemplateColumns : '1fr 1fr',
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
        textAlign : 'left',
        gap: {
            xs : '.5rem',
            md : '2rem'
        },
        '@media screen and (max-width: 500px)': {
            overflowX: 'scroll',
            whiteSpace : 'no-wrap'
        },
    }
}