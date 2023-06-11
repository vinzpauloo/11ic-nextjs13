"use client";

import React from 'react'

// ** Next Imports
import { useRouter } from 'next/navigation';

// ** MUI Imports
import { Box } from "@mui/material";




type Props = {
    heading : string | React.ReactNode
    render : ( routeTo : ( str : string ) => void ) => string | React.ReactNode | any
}

const ListMenuButtons = (props: Props) => {
    const { heading, render } = props

    const router = useRouter();

    const routeTo = (route : string) => {
        alert(`Go to ${route}`)
        //router.push(route)
    }

    return (
    <Box sx={styles.container}>
        <h2 style={styles.heading}>{heading}</h2>
        <Box sx={styles.leftButtonWrapper}>
            {render(routeTo)}
        </Box>
    </Box>
    )
}

export default ListMenuButtons

const styles = {
    container : {
        display:'flex',
        flexDirection: 'column',
        gap: '2.5rem'
    },
    heading : {
        color : '#fff',
        fontWeight: '700'
    },
    leftButtonWrapper : {
        display:'flex',
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
        flexDirection : 'column',
        textAlign : 'left',
        gap: '2rem'
    }
}