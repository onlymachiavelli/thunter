import React from 'react'
import { HomeImage } from '../UI/home/slide'
import Desc from '../UI/home/descr'
import Search from '../UI/home/search'
import Service from '../UI/home/services'

const Hume = () => {
    return (
        <main className="home">
            <HomeImage />
            <Desc />
            <Search />
            <Service />
        </main>

    )
}

export { Hume }
