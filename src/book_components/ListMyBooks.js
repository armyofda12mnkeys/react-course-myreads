import React, { Component } from 'react';
import BookShelf from './sub_components/BookShelf';
import SearchFooter from './sub_components/SearchFooter';

class ListMyBooks extends Component {	

  render() {
		const updateBookShelf = this.props.updateBookShelf;
		//console.log('props:', this.props);
		//console.log('state:', this.state);
		
		const books = this.props.mybooks || [];		
		const currently_reading_books = books.filter( (book) => { return book.shelf === 'currentlyReading' } );
		const want_to_read_books      = books.filter( (book) => { return book.shelf === 'wantToRead' } );
		const already_read_books      = books.filter( (book) => { return book.shelf === 'read' } );
		
		return (
			<div className="bookshelf">
				<div className="list-books-title"><h1>My Reads</h1></div>
				<div className="list-books-content">
					<BookShelf books={currently_reading_books} type="currentlyReading" bookshelfTitle="Currently Reading Books" bookshelfClass="currently-reading-books" updateBookShelf={updateBookShelf}/>
					<BookShelf books={want_to_read_books}      type="wantToRead"       bookshelfTitle="Want to Read Books"      bookshelfClass="want-to-read-books"      updateBookShelf={updateBookShelf}/>
					<BookShelf books={already_read_books}      type="read"             bookshelfTitle="Already Read Books"      bookshelfClass="already-read-books"      updateBookShelf={updateBookShelf}/>
					<SearchFooter />
				</div>
			</div>
		);
  };
	
}

export default ListMyBooks;