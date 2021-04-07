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
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
        console.log(books)
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <BookShelf books={this.state.books}/>
        )} />

        <Route path='/add' render={() => (
            <BookSearch BooksAPI={BooksAPI} />
        )} />

      </div>
    )
  }
}

export default BooksApp
