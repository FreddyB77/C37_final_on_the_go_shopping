import React, { useContext }from 'react'
import { Button } from '@material-ui/core'
import './nav.css'

import BottomNavButton from '../buttons/BottomNavButton'
import { CartContext } from '../../context/CartContext'


const BottomNav = ({history}) => {
    const { userAccount } = useContext(CartContext)
    return (
        <div className="bNav-container sticky-nav nav-shadow">

            <BottomNavButton 
                history={history}
                url="home"
                text="Home"
                img="img"
                />
            <BottomNavButton 
                history={history}
                url="scan"
                text="Scan"
                img="img"
                />
            <BottomNavButton 
                history={history}
                url="explore"
                text="Explore"
                img="img"
                />
            <BottomNavButton 
                history={history}
                url="account"
                text={userAccount.fName}
                img="img"
                />
        </div>
    )
}

export default BottomNav
