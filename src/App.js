import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch'
import BookShelf from './BookShelf'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        cover: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
        shelf: 'Currently Reading'
      }
    ]
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
