import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import BookShelf from './sub_components/BookShelf';

class SearchBooks extends Component {
	state = {
		query: '',
		found_books: []
	}	
	
	searchBooks = (query) => {
		this.setState({ query: query }); // do not trim string for now, since it would remove spaces in searches like 'Artificial Intelligence'	
		if(query.length === 0) { //start searching after starts typing 3 chars
			this.setState({ found_books: [] });
		}		
		if(query.length < 3) { //start searching after starts typing 3 chars
			return; 
		}		
		
		BooksAPI.search(query, 20).then( (queried_books) => {
				//console.log('queried_books', queried_books);
				const mybooks = this.props.mybooks;
				if( queried_books.length > 0) {
					queried_books.map(function(query_book){
						//console.log('query_book', query_book);
						var findbook = mybooks.find(findbook => findbook.id === query_book.id);
						//var findbook = mybooks.find(findbook => findbook.title === "Satire TV");
						//var findbook = mybooks.find(function(findbook){ console.log(findbook); return findbook.title === "Satire TV"; }); console.log('222',findbook);
						console.log('findbook', findbook);
						if(findbook) {
							query_book.shelf = findbook.shelf;
							return query_book;
						} else {
							query_book.shelf = 'none';
							return query_book;
						}
					});
					//console.log('queried_books, after adding shelf prop',queried_books);
				}
				
				this.setState({ found_books: queried_books });
			}
		);
		
	};
	
  render() {
		//const searchLibraryMain = this.props.searchLibraryMain;
		const updateBookShelf = this.props.updateBookShelf;
		//const mybooks = this.props.mybooks;
		
		return (
			<div className="search-books">
				
				<div className="search-books-bar">
					<Link className="close-search" to="/">Home</Link>
					<div className="search-books-input-wrapper">
						<input type="text" 
							placeholder="Search Books..." 
							value={this.state.query}
							onChange={ (event) => this.searchBooks(event.target.value)}/>
					</div>
				</div>
				<div className="search-status">
						{ this.state.found_books === undefined || (this.state.found_books && this.state.found_books.length===0) || (this.state.found_books.error && this.state.found_books.error==="empty query") ? 'No books found yet.' : ''}
						{this.state.query.length < 3 ? ' Please type at least 3 characters to start search.' : ''}
				</div>

				<BookShelf books={this.state.found_books}      type="found"             bookshelfTitle="Found Books"      bookshelfClass="search-books-results"      updateBookShelf={updateBookShelf}/>
				
			</div>
		);
  }
	
}

export default SearchBooks;