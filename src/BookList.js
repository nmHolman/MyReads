import React, { Component } from 'react'
import ShelfSelector from './ShelfSelector'

class BookList extends Component {
    render() {
        return (
            <ol className="books-grid">
                {this.props.books.map((book) => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <ShelfSelector book={book.id} BooksAPI={this.props.BooksAPI}/>
                            </div>
                            <div className="book-title">{book.title}</div>
                            {book.authors.map((author) => (
                                <div className="book-authors">{author}</div>
                            ))}                                
                        </div>
                    </li>
                ))}
            </ol>           
        )
    }
}

export default BookList