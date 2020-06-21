import React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import mapLogo from '../../assets/imgs/storeLocation/mapLogo.png'
import OnBoardNav from '../../components/navs/OnboardNav'

import './location.css'

const LocationOne = () => {
    let history = useHistory()

    const handleZip = () => {
        console.log("Zip")
        history.push("/locationZip")
    }

    return(
    <>
        <OnBoardNav step={"3/3"}/>
        <div className="lOne-container">
            <div className="lOne-text">
                <h1 id="lOne-title">Store Location</h1>
                <h2>Finally, tell us where you're shopping to:</h2>
            </div>

            <img src={mapLogo} alt="Logo: stores Near Me"/>

            <div className="lOne-button-container">


            <Button
                className="button-lg-green"
                onClick={() => history.push("/locationGeo")}
            >
                Share My Location
            </Button>


            <Button
                    id="oShareLocation"
                    className="button-lg-hollow"
                    onClick={handleZip}
                >
                    Enter Zip Code
                </Button>

            </div>
        </div>
    </>

    )
}

export default LocationOne
