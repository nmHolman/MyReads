import React, { Component } from 'react'

class ShelfSelector extends Component {
    render() {
        return (
            <div className="book-shelf-changer">
                {
                    this.props.book.shelf &&          
                        <select key={this.props.book.id} defaultValue={this.props.book.shelf} onChange={(event) => {this.props.changeShelf(this.props.book, event.target.value)}}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                }
                {
                    this.props.currentBooks.map((currBook) => (
                        this.props.book.id === currBook.id &&
                            <select key={this.props.book.id} defaultValue={currBook.shelf} onChange={(event) => {this.props.changeShelf(this.props.book, event.target.value)}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                    
                    ))
                }
                {
                    !this.props.book.shelf &&
                        <select key={this.props.book.id} defaultValue='none' onChange={(event) => {this.props.changeShelf(this.props.book, event.target.value)}}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                }
            </div>
        )
    }
}

export default ShelfSelector