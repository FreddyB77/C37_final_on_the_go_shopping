import React from 'react'
import { Button } from '@material-ui/core'

const BackArrow = ({history}) => {
    const handleBack = () => {
        history.goBack();
      }

    return (
            <Button 
                onClick={handleBack}>
                    BCK
            </Button>
    )
}

export default BackArrow
