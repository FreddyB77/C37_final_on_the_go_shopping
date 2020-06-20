import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import BackNav from '../../components/navs/BackNav'

import ScanButton from '../../components/buttons/ScanButton'
import './productDescriptionPage.css'


const ProductDescriptionPage = ({history}) => {
    const { cart } = useContext(CartContext)

    return (
        <div className='pdp-item-container'>
            <BackNav history={history}/>
            <img src={"https://picsum.photos/300/300"} alt="Product Image"/>
            <div className="pdp-item-stat">
                <h1 id="pdp-item-name">{cart[0].name}</h1>
                <p id ="pdp-item-size">{cart[0].size}</p>
                <p>${cart[0].price}</p>
                <p>Location in store: Aisle {Math.floor(Math.random() * 17)}</p>
                <p>In Stock: Qty {Math.floor(Math.random() * 100)}</p>
            </div>
            <ScanButton 
                history={history}
                text="Scan"
                link="/scan"
            />
        </div>
    )
}

export {ProductDescriptionPage}
