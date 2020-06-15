import React from 'react'
import { Button } from '@material-ui/core'

const CheckoutButton = ({history}) => {

    const handleClick = (url) => {
        history.push('/checkout')
    }

    return (
        <Button onClick={handleClick}>Checkout</Button>
    )
}

export default CheckoutButton
