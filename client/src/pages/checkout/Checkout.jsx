import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import BackArrow from '../../components/buttons/BackArrow'
import OrDivider from '../../components/drawer/OrDivider'
import Total from '../../components/drawer/Total'
import PaymentForm from '../../components/form/PaymentForm'

import './checkout.css'
import '../../components/buttons/button.css'

const CheckoutPage = () => {
    const [ paymentState, setPaymentState] = useState(false)
    let history = useHistory()

    const handleChange = (event) => {
        (event.target.value === 'true') ? setPaymentState(true) : setPaymentState(false);
      };

    const handleCheckout = () => {
        history.push('/receiptPage')
    }

    return (
        <>
        <BackArrow/>
        <div className="checkout-container">
            <div className="checkout-express">
                <h1>Express Checkout</h1>
                <Button id="button-lg-hollow">Pay</Button>
                <Button id="button-lg-hollow">PayPal</Button>
            </div>
            <OrDivider />
            <h1>Add Payment</h1>

            <FormControl component="fieldset">
            <RadioGroup aria-label="payment" name="payment_Selection" onChange={handleChange}>
                <FormControlLabel value="false" control={<Radio />} label="Visa" />
                <FormControlLabel value="true" control={<Radio />} label="Add new Payment" />
            </RadioGroup>
            </FormControl>

            {paymentState && <PaymentForm />}
            <Total />

            <Button onClick={() => handleCheckout}>
                Checkout 
            </Button> 
        </div>
        </>
    )
}

export default CheckoutPage
