import React, { useContext } from 'react'
import CheckoutButton from '../buttons/CheckoutButton'

import { CartContext } from '../../context/CartContext'

const CheckoutNav = ({history}) => {
    const { subTotal } = useContext(CartContext)

    return (
        <div className="checkout-container sticky-nav nav-shadow">
            <div>
                <h5>Subtotal</h5>
                <h3>${subTotal}</h3>
            </div>

            <CheckoutButton history={history}/>
        </div>
    )
}

export default CheckoutNav
