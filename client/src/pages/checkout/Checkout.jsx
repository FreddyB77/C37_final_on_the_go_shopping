import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import BackArrow from '../../components/buttons/BackArrow'
import HollowButton from '../../components/buttons/HollowButton'
import OrDivider from '../../components/drawer/OrDivider'
import AddPayment from '../../components/AddPayment'
import SolidGreenButton from '../../components/buttons/SolidGreenButton'
import Total from '../../components/drawer/Total'
import PaymentForm from '../../components/form/PaymentForm'


const CheckoutPage = ({history}) => {
    const [ paymentState, setPaymentState] = useState(false)

    const handleChange = (event) => {
        (event.target.value === 'true') ? setPaymentState(true) : setPaymentState(false);
      };
      
    const handleMe = () => {
        console.log("Test")
    }
  
    return (
        <div>
            <BackArrow history={history}/>
            <HollowButton text="Pay" />
            <HollowButton text="PayPal" />
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

            <SolidGreenButton 
                text="Checkout" 
                history={history} 
                url="/receiptPage" />

            
            
        </div>
    )
}

export default CheckoutPage
