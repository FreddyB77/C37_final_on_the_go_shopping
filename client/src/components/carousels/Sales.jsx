import React, { useContext } from 'react'

import {CartContext } from '../../context/CartContext'
import './carousels.css'
import bread from '../../assets/imgs/sales/bread.png'
import terraChips from '../../assets/imgs/sales/terraChips.png'
import waterBottles from '../../assets/imgs/sales/waterBottles.png'

const Sales = () => {
    const { cart } = useContext(CartContext);

    const sales = [{
        name: "Arnold Country White Bread",
        img: bread,
        price: 5.19,
        salePrice: 3.85,
        location: 3
    },{
        name: "Zephyrhilis Natural Florida Spring Water",
        img: waterBottles,
        price: 6.09,
        salePrice: 3.69,
        location: 7
    },{
        name: "Terra Exotic Harvest Real Vegetable Chips",
        img: terraChips,
        price: 10.49,
        salePrice: 3.01,
        location: 3
    }]

    return (
        <div class="home-carousel-container">
            {sales?.map( item => {
              return(
                <div class="item-carousel">
                  <img 
                    className="item-carousel-img"
                    src={item.img} 
                    img="Promotional item"
                  />
                  <div>
                    <p className="item-price">${item.salePrice} 
                        <span className="item-reg-price">${item.price}</span>
                    </p>
                    <p className="item-promo">Buy 1 Get 1 Free</p>
                    <p className="item-name">{item.name}</p>
                    <p className="item-location">Aisle {item.location}</p>
                  </div>
                </div>
            )})}
        </div>
    )
}

export default Sales
