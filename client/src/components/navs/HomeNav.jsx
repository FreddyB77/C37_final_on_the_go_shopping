import React from 'react'

import CartButton from '../buttons/CartButton'

import './nav.css'

const HomeNav = () => {
    return (
        <div className="home-nav"> 
            <h1>On-the-Go</h1>
            <CartButton />
        </div>
    )
}

export default HomeNav
