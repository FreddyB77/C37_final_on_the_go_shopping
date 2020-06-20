import React, { useState, useEffect } from 'react'
import axios from 'axios'

import BackArrow from '../../components/buttons/BackArrow'

const LocationZip = ({history, location}) => {
class GroceryStore extends React.Component {
  state = {
            grocery: [],
            location: this.props.match.params.location,
            term: this.props.match.params.term || 'grocery',
            loader: true,
          }

  componentDidMount() {
    const { location, term='grocery' } = this.props.match.params;
    location && this.fetchgrocery(location, term)
  }

  handleInputChange = field => e => this.setState({ [field]: e.target.value })

  handleSubmit = event => {
    const { location, term } = this.state;
    if (location && term) {
      event.preventDefault()
      this.props.history.push(`/grocery/${location}/${term || ''}`)
      this.fetchgrocery(location, term)
    }
  }

handleSortRating = event => {
  const { grocery } = this.state
  const sortedGrocery = grocery.sort((a,b) => {
    return b.rating - a.rating
  })
  
  this.setState({ grocery: sortedgrocery })
}

handleSortLowRating = event => {
  const { grocery } = this.state 
  const sortedByLowRating = grocery.sort((a,b) => {
    return a.rating - b.rating
  })
  this.setState({ grocery: sortedByLowRating})
}

  fetchGrocery = (location, term) => {
    if (!location) return;
    localStorage.setItem('location', location)
    localStorage.setItem('term', term)
    const url = `/api/grocery/search/${location}/${term || ''}`;
    fetch(url)
    .then(response => response.json())
    .then(yelpResponse => {
      this.setState({
        grocery: yelpResponse,
        location,
        term,
        loader: false,
      })
    })
  }

  render(){
    return (
      <>
      <React.Fragment>
      <h1 className="h1-will"><a href="/">Grocery Store</a></h1>
       <form className="form-div" onSubmit={this.handleSubmit}>
          <div className="div2">
            <input
              id="location"
              className="input-will"
              type="text"
              placeholder="Search for a grocery Location"
              onChange={this.handleInputChange('location')}
              value={this.state.location}
              required
              spellCheck="false"
            />
            <input
              type="text"
              className="input-will-2"
              placeholder="Search a grocery by keyword"
              onChange={this.handleInputChange('term')}
              value={this.state.term}
              required
              spellCheck="false"
            />
            <button type="submit" id="transparent-button">
            <img src={Beer} 
            className="beer-icon" 
            alt="beer-icon"
            
            />
            </button>
            </div>
        </form>
        <div className="sort-section">
        <button className="highratingbutton" onClick={this.handleSortRating}>Sort By Highest Rated </button>
        <button className="lowratingbutton" onClick={this.handleSortLowRating}>Sort By Lowest Rated</button>
        <button className="pricelow" onClick={this.handleSortLowPrice}>Price: Low to High</button>
        <button className="pricehigh" onClick ={this.handleSortHighPrice}>Price: High to Low</button>
        </div>
        
      <div className="grocerylist">
        {
          this.state.grocery
          .map(grocery => (
            <Link to={`/grocery/${grocery.id}`} key={grocery.id}>
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
            </Link>
          ))
        }
       </div>
       </React.Fragment>
       </>
    )
  }
}
}

export default LocationZip
