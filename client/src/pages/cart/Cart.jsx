import React, { useContext } from 'react'

import { CartContext } from '../../context/CartContext'
import { Button } from '@material-ui/core'

import BackArrow from '../../components/buttons/BackArrow'
import CheckoutNav from '../../components/navs/CheckoutNav'

import './cart.css'

const Cart = ({history}) => {
    const { cart } = useContext(CartContext)
    return (
        <div>
            <BackArrow history={history}/>
            <h1 id="cart-title">My Cart</h1>
            {cart?.map( item => {
                return(
                    <div className="cart-item-container">
                        <img src="https://picsum.photos/100/100"/>
                        <div className="cart-item">
                            <h4>{item.name}</h4>
                            <p>{item.size}</p>
                        </div>
                        <div className="cart-bottomRow">
                            <div className="cart-remove">
                                <h1>TR</h1>
                                <p>Remove</p>
                            </div>
                            <div className="cart-quantity">
                                <Button style={{border:"1px solid black"}}>4</Button>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })}

            <CheckoutNav 
                history={history} 
                total={"100.43"}
            />


        </div>
    )
}

export default Cart
