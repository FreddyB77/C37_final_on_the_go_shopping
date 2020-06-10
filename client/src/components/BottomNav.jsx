import React from 'react'
import { Button } from '@material-ui/core'
import './bottomNav.css'

const BottomNav = ({history}) => {
    const handleScan = () => {
        history.push("/scan")
    }
    const handleHome = () => {
        history.push("/home")
    }
    const handleExplore = () => {
        history.push("/explore")
    }

    return (
        <div className="bNav-container">
            <Button onClick={handleHome}> Home</Button>
            <Button onClick={handleScan}> 
                Scan
            </Button>
            <Button onClick={handleExplore}> Explore</Button>
            <Button> Account</Button>
        </div>
    )
}

export default BottomNav
