import React from 'react'
import { Paper, IconButton, InputBase, Divider } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import './searchBar.css'

const handleSearch = () => {
    console.log("Handle Me!")
}

const SearchBar = () => {
    return(
    <>
        <Paper component="form" className="searchBar-container" onSubmit={handleSearch}>
            <div>
                <IconButton type="submit"  aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    placeholder="Search"
                    id="searchBar"
                    inputProps={{ 'aria-label': 'Search' }}
                />
                <Divider  orientation="vertical" />
            </div>
        </Paper>
    </>
  )
}

export default SearchBar
