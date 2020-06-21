import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import axios from 'axios'
import { CartContext } from '../../context/CartContext'
import BackArrow from '../../components/buttons/BackArrow'
import Total from '../../components/drawer/Total'
import PaymentForm from '../../components/form/PaymentForm'

import './checkout.css'
import '../../components/buttons/button.css'

const CheckoutPage = () => {
    const { cartTotal } = useContext(CartContext)
    let history = useHistory()

    const [ creditCard, setCredit ] = useState('4242 4242 4242 4242')
    const [ cvv, setCVV ] = useState('888')
    const [ exp, setExp ] = useState('08/22') 
    const [ formSubmit, setFormSubmit ] = useState(false)

    const handleCheckout = async () => {
        const token = localStorage.getItem("token")
        await axios({
            method: "POST",
            url:"http://localhost:8080/charge",
            data: {
                creditCard: creditCard,
                expiration: exp,
                cvv: cvv,
                amount: cartTotal.total.toFixed(2)*100
            },
            headers: {Authorization: `Bearer ${token}`} 
        }).then((data) => {
            console.log(data)
        }).catch(e => console.error(e))
        
        history.push('/receiptPage')
    }

    return (
        <>
        <BackArrow/>
        <div className="checkout-container">
            <h1>Add Payment</h1>

            <PaymentForm 
                setCredit={setCredit}
                setCVV={setCVV}
                setExp={setExp}
                setToggle={setFormSubmit}
            />
            <Total />

            <Button onClick={() => handleCheckout()}>
                Checkout 
            </Button> 
        </div>
        </>
    )
}

export default CheckoutPage
