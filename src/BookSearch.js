import React, { Component } from 'react'
import SearchBar from './SearchBar'
import BookList from './BookList'

class BookSearch extends Component {
    state = {
        query: '',
        results: []
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))      
    }

    runQuery = () => {
        this.props.BooksAPI.search(this.state.query)
            .then((res) => {
                const results = res;
                if (res !== undefined  && res.length > 0) {
                    this.setState(() => ({
                        results: results
                    }));
                }                      
            })
    }

    handleQuery = (query) => {
        this.updateQuery(query)
        if (query !== "") {
            this.runQuery(query)
        } else if (query === "") {
            this.setState(() => ({results: []}))
        }
            
    }

    render() {
        return(
            <div className="search-books">
                <SearchBar handleQuery={this.handleQuery} />
                <div className="search-books-results">
                    <BookList books={this.state.results} currentBooks={this.props.currentBooks} changeShelf={this.props.changeShelf} />
                </div>                
            </div>
        )
    }
}

export default BookSearch