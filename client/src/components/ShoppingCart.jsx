import React, { useContext } from 'react'
import { AppContext } from '../context/CartContext'
import '../App.css'

import tide from '../../img/tide.png'
import trashIcon from '../../img/trashIcon.svg'

const ShoppingCart = () => {
    const { cart, setCart } = useContext(AppContext)
    
    return (
        <div>
            {cart && cart.map(item =>{
                return(
                    <div className="sCart-item">
                        <img 
                            className="sCart-item-img" 
                            src={tide}
                            alt={`${item.name}`}
                        />
                        <div class="sCart-item-detail">
                            <h4>{item.name}</h4>
                            <h4>{item.size}</h4>
                            <div class="sCart-item-detail-remove">
                                <div id='sCart-item-trash-icon'>1</div>
                                <h4>Remove</h4>
                            </div>
                        </div>
                        
                        <div class="sCart-item-amount">
                            <span class='sCart-item-quantity'>{item.quantity}</span>
                            <span class='sCart-item-price'>${item.price}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ShoppingCart
