import React, { useContext }from 'react'
import './nav.css'

import BottomNavButton from '../buttons/BottomNavButton'
import { UserContext } from '../../context/UserContext'

import { useHistory } from "react-router-dom";

import accountIcon from '../../assets/imgs/Bottom Nav Icons/accountIcon.svg'
import homeIcon from '../../assets/imgs/Bottom Nav Icons/homeIcon.svg'
import scanIcon from '../../assets/imgs/Bottom Nav Icons/scanIcon.svg'
import searchIcon from '../../assets/imgs/Bottom Nav Icons/searchIcon.svg'
const BottomNav = () => {
    const { user } = useContext(UserContext)
    let history = useHistory()
    return (
        <div className="bNav-container sticky-nav nav-shadow">

            <BottomNavButton 
                history={history}
                url="home"
                text="Home"
                img={homeIcon}
            />
            <BottomNavButton 
                history={history}
                url="scan"
                text="Scan"
                img={searchIcon}
                />
            <BottomNavButton 
                history={history}
                url="explore"
                text="Explore"
                img={scanIcon}
                />
            <BottomNavButton 
                history={history}
                url="account"
                text={user.firstName}
                img={accountIcon}
                />
        </div>
    )
}

export default BottomNav
