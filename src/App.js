import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch'
import BookShelf from './BookShelf'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.refreshShelf()
  }

  refreshShelf = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
        .then(() => {
          this.refreshShelf();
        })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <BookShelf books={this.state.books} BooksAPI={BooksAPI} currentBooks={this.state.books} changeShelf={this.changeShelf}/>
        )} />

        <Route path='/search' render={() => (
            <BookSearch BooksAPI={BooksAPI} currentBooks={this.state.books} changeShelf={this.changeShelf} />
        )} />

      </div>
    )
  }
}

export default BooksApp
