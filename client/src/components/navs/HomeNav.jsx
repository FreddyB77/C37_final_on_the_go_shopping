import React from 'react'

import CartButton from '../buttons/CartButton'
import downIcon from '../../assets/imgs/homeDownIcon.svg'
import './nav.css'

const HomeNav = ({history}) => {
    return (
        <div className="home-nav nav-shadow"> 
            <div>
                <h1 id="home-OTG-title">On-the-Go</h1>
                <div id="home-store-container">
                    <p id="home-store">Store_Name</p>
                    <p id="home-store-zip">(33031)</p>
                    <img src={downIcon} />
                </div>
            </div>
            <div>
                <CartButton history={history}/>
            </div>
        </div>
    )
}

export default HomeNav
