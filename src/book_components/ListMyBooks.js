import React, { Component } from 'react';
import CurrentlyReading from './sub_components/CurrentlyReading';
import WantToRead from './sub_components/WantToRead';
import AlreadyRead from './sub_components/AlreadyRead';
import SearchFooter from './sub_components/SearchFooter';

class ListMyBooks extends Component {	

  render() {
		const updateBookShelf = this.props.updateBookShelf;
		console.log('props:', this.props);
		console.log('state:', this.state);
		
		const books = this.props.mybooks || [];		
		const currently_reading_books = books.filter( (book) => { return book.shelf === 'currentlyReading' } );
		const want_to_read_books      = books.filter( (book) => { return book.shelf === 'wantToRead' } );
		const already_read_books      = books.filter( (book) => { return book.shelf === 'read' } );
		
		return (
			<div className="bookshelf">
				<div className="list-books-title"><h1>My Reads</h1></div>
				<div className="list-books-content">
					<CurrentlyReading books={currently_reading_books} updateBookShelf={updateBookShelf}/>
					<WantToRead       books={want_to_read_books}      updateBookShelf={updateBookShelf}/>
					<AlreadyRead      books={already_read_books}      updateBookShelf={updateBookShelf}/>
					<SearchFooter />
				</div>
			</div>
		);
  };
	
}

export default ListMyBooks;