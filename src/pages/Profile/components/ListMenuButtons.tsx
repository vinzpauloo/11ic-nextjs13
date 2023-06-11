"use client";

import React from 'react'
import { useRouter } from 'next/navigation';


type Props = {
    heading : string | React.ReactNode
    render : ( routeTo : ( str : string ) => void ) => string | React.ReactNode | any
}

const ListMenuButtons = (props: Props) => {
    const { heading, render } = props

    const router = useRouter();

    const routeTo = (str : string) => {
        router.push('/profile')
    }

    return (
    <div>
        <h2>{heading}</h2>
        <div>
            {render(routeTo)}
        </div>
    </div>
    )
}

export default ListMenuButtons