import React from 'react';
import { Button } from '@material-ui/core'
import '../../App.css';


const OnBoardingNav = ({ history, text }) => {  
    return (
      <div className="cAccount-nav">
        <Button onClick={() => history.push("/login")}>Cancel</Button>
        <h1>{text}</h1>
      </div>
    );
  };

  export default OnBoardingNav