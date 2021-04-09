import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList'

class BookShelf extends Component{    
    render() {
        const currentReads = this.props.books.filter((book) => book.shelf === 'currentlyReading')
        const readWants = this.props.books.filter((book) => book.shelf === 'wantToRead')
        const read = this.props.books.filter((book) => book.shelf === 'read')

        return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <BookList books={currentReads} currentBooks={this.props.books} changeShelf={this.props.changeShelf} />
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <BookList books={readWants} currentBooks={this.props.books} changeShelf={this.props.changeShelf} />
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <BookList books={read} currentBooks={this.props.books} changeShelf={this.props.changeShelf} />
                        </div>
                    </div>
                </div>
                <div className="open-search">              
                    <Link to='/add'>
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}

export default BookShelf