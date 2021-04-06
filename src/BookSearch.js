import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

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
                <SearchResults  results={this.state.results}/>
            </div>
        )
    }
}

export default BookSearch