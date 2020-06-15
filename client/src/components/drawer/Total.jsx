import React from 'react'


const Total = () => {
    return (
        <div className="total-cost"> 
            <h2>Subtotal</h2>
            <h2 className="total-right">$100.43</h2>
            <h2>Estimated Sales Tax</h2>
            <h2 className="total-right">$1.49</h2>
            <h3>Total Savings</h3>
            <h3 className="total-right">$3.25</h3>
            <h1>Total</h1>
            <h1 className="total-right">$25.15</h1>
        </div>
    )
}

export default Total
