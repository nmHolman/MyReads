import React, { Component } from 'react'

class SearchResults extends Component {
    

    render() {
        return (
            <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.results.map((result) => (
                            <li key={result.id}>
                                <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${result.imageLinks.thumbnail})` }}></div>
                                    <div className="book-shelf-changer">
                                    <select>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="book-title">{result.title}</div>
                                <div className="book-authors">{result.authors}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
            </div>
        )
    }
}

export default SearchResults