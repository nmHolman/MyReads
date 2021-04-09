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
                                <ShelfSelector book={book} currentBooks={this.props.currentBooks} changeShelf={this.props.changeShelf} />
                            </div>
                            <div className="book-title">{book.title}</div>
                            {book.authors.map((author) => (
                                <div key={book.id+author} className="book-authors">{author}</div>
                            ))}                                
                        </div>
                    </li>
                ))}
            </ol>           
        )
    }
}

export default BookList