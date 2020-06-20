import React, { useContext, useState, useEffect } from 'react'

import { CartContext } from '../../context/CartContext'
import BackArrow from '../../components/buttons/BackArrow'
import CheckoutNav from '../../components/navs/CheckoutNav'
import trashIcon from '../../assets/imgs/trashIcon.svg'

import './cart.css'

const Cart = ({history }) => {
    const { cart, setCart } = useContext(CartContext)
    
    function handleRemove(upc){
        let tempCart = cart
        let filterCarted = tempCart.filter((item) => {
            return item.upc !== upc
        })
        setCart([...filterCarted])
    }

    const handleSub = (key) => {
        if(cart[key].quantity > 0){
            let tempCart = cart;
            tempCart[key].quantity -= 1
            setCart([...tempCart])
        }
    }

    const handleAdd = (key) => {
        let tempCart = cart;
        tempCart[key].quantity += 1
        setCart([...tempCart])
    }

    return (
        <div>
            <BackArrow history={history}/>
            {console.log("Cart", cart)}
            <h1 id="cart-title">My Cart</h1>
            {cart?.map( (item, key) => {
                return(
                    <div className="cart-item-container" key={`cart-item-${key}`}>
                        <img 
                            src="https://picsum.photos/100/100" 
                            alt={`${item.title}`}
                        />
                        <div className="cart-item">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                        <div className="cart-bottomRow">
                            <div className="cart-remove" onClick={() => handleRemove(item.upc)}>
                                <img src={trashIcon} alt="Remove item"/>
                                <p>Remove</p>
                            </div>
                            <div className="cart-quantity">
                                <div className="cart-mod">
                                    <span className="cart-mod-btn" 
                                        style={{/*display: oToggled ? "block" : "none"*/}}
                                        onClick={() => handleSub(key)}>
                                            -
                                    </span>

                                    <span className="cart-quanity-btn">
                                        {item.quantity}
                                    </span>

                                    <span className={`cart-mod-btn`}  
                                        style={{/*display: oToggled ? "block" : "none"*/}}
                                        onClick={() => handleAdd(key)}>
                                        +
                                    </span>
                                </div>
                                <p>${item.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })
            }

            <CheckoutNav history={history}/>
        </div>
    )
}

export default Cart
