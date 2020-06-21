import React, { useContext } from 'react'
import { AppContext } from '../context/CartContext'
import '../shoppingCart.css'

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
                        <div className="sCart-item-detail">
                            <h4>{item.name}</h4>
                            <h4>{item.size}</h4>
                            <div className="sCart-item-detail-remove">
                                <div id='sCart-item-trash-icon'>1</div>
                                <h4>Remove</h4>
                            </div>
                        </div>
                        
                        <div className="sCart-item-amount">
                            <span className='sCart-item-quantity'>{item.quantity}</span>
                            <span className='sCart-item-price'>${item.price}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ShoppingCart
