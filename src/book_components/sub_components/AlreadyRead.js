import React, { Component } from 'react';

class AlreadyRead extends Component {

  render() {
		const books = this.props.books || [];
		const updateBookShelf = this.props.updateBookShelf;
		
		//console.log('Props', this.props);
		return (
			<div className="already-read-books">
				<h2 className="bookshelf-title">Already Read Books:</h2>
				<ul className="bookshelf-books books-grid">
				{books.map( (book) => (
					<li className="bookshelf-book book" key={book.id}>
						<div className="book-image">
							<img src={book.imageLinks.thumbnail} />
							<div className="book-shelf-changer">
								<select onChange={(e)=>updateBookShelf(book, e.target.value)} value={book.shelf}>
									<option value="" disabled="disabled">Move to...</option>
									<option value="currentlyReading">Currently Reading</option>
									<option value="wantToRead">Want to Read</option>
									<option value="read">Read</option>
									<option value="none">None</option>
								</select>
							</div>
						</div>
						<div className="book-title">{book.title}</div>
						<div className="book-authors">{book.authors.join(', ')}</div>
						{/*<div className="book-shelf">{book.shelf}</div>*/}
					</li>
				))}
				</ul>
			</div>
		);
  }
	
}

export default AlreadyRead;