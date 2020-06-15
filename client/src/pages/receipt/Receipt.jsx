import React, { useContext } from 'react'

import { CartContext } from '../../context/CartContext'
import Total from '../../components/drawer/Total'

import './receipt.css'
import returnHome from '../../assets/imgs/returnHome.png'
import barcode from '../../assets/imgs/barcode.svg'


const ReceiptPage = ({history}) => {
    const { cart } = useContext( CartContext )

    const handleClick = () => {
        history.push("/home")
    }

    return (
        <div>
            <div className="receipt-Nav">
                <h1>On-the-Go</h1>
                <img src={returnHome} alt="Return to home page icon" onClick={() => handleClick()}/>
            </div>

            <h1 id="receipt-thanks">Thank you for shopping with us!</h1>
            {cart?.map(item => {
                return(
                    <div className="receipt-itemized">
                        <h5>{item.name}</h5>
                        <p>${item.price}</p>
                    </div>
                )
            })}
            <Total />

            <div className="receipt-barcode">
                <p>Please show this screem to security on your way out</p>
                <img src={barcode} alt="Exit barcode. Please show to security"/>
            </div>

        </div>
    )
}

export default ReceiptPage
