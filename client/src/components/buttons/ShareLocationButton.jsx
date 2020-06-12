import React from 'react'
import { Button } from '@material-ui/core'

const ShareLocationButton = ({history}) => {
    
    const handleSubmit = () => {
        history.push("/geo")
    }

    return (
            <Button
                className="button-lg-green"
                onClick={handleSubmit}
            >
                Share My Location
            </Button>
    )
}

export default ShareLocationButton
