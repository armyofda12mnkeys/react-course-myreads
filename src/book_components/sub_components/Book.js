import React, { Component } from 'react';

class Book extends Component {

  render() {
		const book = this.props.book;
		const updateBookShelf = this.props.updateBookShelf;
		
		//console.log('Props', this.props);
		return (
				<li className="bookshelf-book book" key={book.id}>
					<div className="book-image">
						<img src={book.imageLinks.thumbnail} alt={book.title} />
						<div className="book-shelf-changer">
							<select onChange={(e)=> {updateBookShelf(book, e.target.value); book.shelf = e.target.value; }} value={book.shelf}>
								<option value="" disabled="disabled">Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{book.title}</div>
					<div className="book-authors">{book.authors && book.authors.join(', ')}</div>
					{/*<div className="book-shelf">{book.shelf}</div>*/}
				</li>
		);
  }
	
}

export default Book;