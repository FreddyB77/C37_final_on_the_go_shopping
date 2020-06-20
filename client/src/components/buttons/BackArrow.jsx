import React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from "react-router-dom";

import backArrow from '../../assets/imgs/arrowBack.svg'

const BackArrow = () => {
    let history = useHistory()

    return (
            <Button 
                onClick={() => history.goBack()}>
                    <img 
                        src={backArrow} 
                        alt="Back Arrow button"
                    />
            </Button>
    )
}

export default BackArrow
