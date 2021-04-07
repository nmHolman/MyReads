import React, { Component } from 'react'

class ShelfSelector extends Component {
    changeShelf = (shelf) => {
        this.props.BooksAPI.update(this.props.book, shelf)
            .then((res) => {
                console.log(res)
            })
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => {this.changeShelf(event.target.value)}}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ShelfSelector