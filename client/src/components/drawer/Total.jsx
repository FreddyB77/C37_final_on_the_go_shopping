import React, { useContext } from 'react'

import {CartContext} from '../../context/CartContext'


const Total = () => {
    const { cartTotal } = useContext(CartContext)
    return (
        <div className="total-cost"> 
            <h2>Subtotal</h2>
            <h2 className="total-right">${cartTotal.subTotal}</h2>
            <h2>Estimated Sales Tax</h2>
            <h2 className="total-right">${cartTotal.saleTax.toFixed(2)}</h2>
            <h3>Total Savings</h3>
            <h3 className="total-right">${cartTotal.savings}</h3>
            <h1>Total</h1>
            <h1 className="total-right">${cartTotal.total.toFixed(2)}</h1>
        </div>
    )
}

export default Total
