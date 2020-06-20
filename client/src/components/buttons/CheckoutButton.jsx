import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

const CheckoutButton = () => {
    let history = useHistory()

    return (
        <Button onClick={() => history.push('/checkout')}>
            Checkout
        </Button>
    )
}

export default CheckoutButton
