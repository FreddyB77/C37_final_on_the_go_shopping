import React, { useContext } from 'react'
import CheckoutButton from '../buttons/CheckoutButton'

import { CartContext } from '../../context/CartContext'

const CheckoutNav = () => {
    const { cartTotal } = useContext(CartContext)

    return (
        <div className="checkout-container sticky-nav nav-shadow">
            <div>
                <h5>Subtotal</h5>
                <h3>${cartTotal.subTotal}</h3>
            </div>

            <CheckoutButton/>
        </div>
    )
}

export default CheckoutNav
