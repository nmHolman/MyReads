import React, { Component } from 'react'
import SearchBar from './SearchBar'

class BookSearch extends Component {
    render() {
        return(
            <div className="search-books">
                <SearchBar />
                <div className="search-books-results">
                <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }
}

export default BookSearch