import React from 'react'
import CheckoutButton from '../buttons/CheckoutButton'


const CheckoutNav = ({history, total}) => {
    return (
        <div class="checkout-container sticky-nav nav-shadow">
            <div>
                <h5>Subtotal</h5>
                <h3>${total}</h3>
            </div>

            <CheckoutButton history={history}/>
        </div>
    )
}

export default CheckoutNav
