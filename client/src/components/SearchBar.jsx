import React, { useContext, useState } from 'react'
import { Paper, IconButton, InputBase, Divider } from '@material-ui/core'

import './searchBar.css'
import SearchIcon from '@material-ui/icons/Search'

import { CartContext } from '../context/CartContext'



const SearchBar = ({history}) => {
    const { handleSearch } = useContext(CartContext)
    const [ searchItem, setSearchItem ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearch(searchItem)
    }

    return(
    <>
        <Paper 
            component="form" 
            className="searchBar-container" 
            onSubmit={e => handleSubmit(e)}
        >
            <div>
                <IconButton type="submit"  aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    placeholder="Search"
                    id="searchBar"
                    inputProps={{ 'aria-label': 'Search' }}
                    onChange={e => setSearchItem(e.target.value)}
                />
                <Divider  orientation="vertical" />
            </div>
        </Paper>
    </>
  )
}

export default SearchBar
