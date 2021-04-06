import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends Component {
    render() {
        return(
            <div className="search-books-bar">
                <Link to='/'>
                    <button className="close-search">Close</button>
                </Link>
                    
                <div className="search-books-input-wrapper">      
                    <input type="text" placeholder="Search by title or author"/>
                </div>
            </div>
        )
    }
}

export default SearchBar