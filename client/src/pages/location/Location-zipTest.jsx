import React, {useState, useEffect,  } from 'react'
import axios from 'axios'

import { Button } from '@material-ui/core'

import BackArrow from '../../components/buttons/BackArrow'

const LocationZipTest = () => {

    const [ grocery, setGrocery ] = useState([])
    const [ location, setLocation ] = useState('grocery')
    const [ term, setTerm ] = useState([])
    const [ loader, setLoader ] = useState(true)
    const [ zip, setZipCode ] = useState('')

    const handleSubmit = event => {
        //const { location, term } = this.state;
        if (location && term) {
          event.preventDefault()
          this.props.history.push(`/grocery/${location}/${term || ''}`)
          this.fetchgrocery(location, term)
        }
      }

    const handleInputChange = field => e => this.setState({ [field]: e.target.value })

    const fetchGrocery = (e) => {
        e.preventDefault()
        axios({
            method: 'POST',
            url: `/location/zip/`, 
            data: { zip: zip }
        }).then((data) => console.log(data))
        .catch((e) => console.log(e))
        

    return (
        <div>
            <h1 className="h1-will"><a href="/">Grocery Store</a></h1>
            <form className="form-div" onSubmit={(e) => fetchGrocery(e)}>
                <div className="div2">
                    <input
                    id="location"
                    className="input-will"
                    type="text"
                    placeholder="Search for a grocery Location"
                    onChange={(e) => {setZipCode(e.target.value); console.log("Blah")}}
                    required
                    spellCheck="false"
                    />
                    <Button type="submit">
                        Submit
                    </Button>
                </div>
            </form>

        
      <div className="grocerylist">
        {grocery?.map(grocery => (
            // <div to={`/grocery/${grocery.id}`} key={grocery.id}>
              <div className="Rob">
            <div className="main-result">
              <div className="results">
                <h3 className="will-h3">{grocery.name}</h3>
                  <img 
                  className="result-images"
                  src={grocery.image_url} 
                  alt={grocery.name}/>
               </div>
            </div>
            </div>
          ))
        }
        </div>

        </div>
    )
}

export default LocationZipTest
