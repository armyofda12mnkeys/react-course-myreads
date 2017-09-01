import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {

  render() {
		const books = this.props.books || [];
		const updateBookShelf = this.props.updateBookShelf;
		const bookshelfTitle = this.props.bookshelfTitle;
		const bookshelfClass = this.props.bookshelfClass;
		
		//console.log('Props', this.props);
		return (
			<div className={bookshelfClass}>
				<h2 className="bookshelf-title">{bookshelfTitle}</h2>
				<ul className="bookshelf-books books-grid">
				{books && books.length > 0 && books.map( (book) => (
					<Book book={book} updateBookShelf={updateBookShelf} />
				))}
				</ul>
			</div>
		);
  }
	
}

export default BookShelf;