import React, { useContext, useEffect } from 'react'

import { CartContext } from '../../context/CartContext'
import { Button } from '@material-ui/core'

import BackArrow from '../../components/buttons/BackArrow'
import CheckoutNav from '../../components/navs/CheckoutNav'
import trashIcon from '../../assets/imgs/trashIcon.svg'

import './cart.css'

const Cart = ({history }) => {
    const { cart, setCart } = useContext(CartContext)

    function handleRemove(index){
        let tempCart = cart
        let filterCarted = tempCart.filter((item) => {
            console.log("In Filter")
            return item.UPC !== index
        })
        setCart(filterCarted)

    }

    return (
        <div>
            <BackArrow history={history}/>
            <h1 id="cart-title">My Cart</h1>
            {cart?.map( (item, key) => {
                return(
                    <div className="cart-item-container">
                        <img 
                            src="https://picsum.photos/100/100" 
                            alt={`${item.name} Image`}
                        />
                        <div className="cart-item">
                            <h4>{item.name}</h4>
                            <p>{item.size}</p>
                        </div>
                        <div className="cart-bottomRow">
                            <div className="cart-remove" onClick={() => handleRemove(item.UPC)}>
                                <img src={trashIcon} />
                                <p>Remove</p>
                            </div>
                            <div className="cart-quantity">
                                <Button style={{border:"1px solid black"}}>4</Button>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })
            }

            <CheckoutNav 
                history={history} 
                total={"100.43"}
            />


        </div>
    )
}

export default Cart
