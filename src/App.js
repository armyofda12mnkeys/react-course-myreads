import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import ListMyBooks from './book_components/ListMyBooks';
import SearchBooks from './book_components/SearchBooks';
import * as BooksAPI from './utils/BooksAPI';


class App extends Component {
	state = {
		mybooks: []
	}; //will be array of book objects
	componentDidMount() {
		//console.log('componentDidMount');
		BooksAPI.getAll().then( (books) => {
			//console.log(books);
			//console.log(books.map( (book, index, array) => {return {title: book.title, status: book.shelf};}) );
			this.setState({mybooks: books});
		});
	}
	
	getBook = (id) => {
		BooksAPI.get(id).then( (book) => {
				//console.log(book);
			}
		);
	};
	
	updateBookShelf = (book, shelf) => {
		//console.log('updateBookShelf:',book);
		//console.log('updateBookShelf', shelf );

		BooksAPI.update(book, shelf).then( () => {
				//console.log(`book added to ${shelf}`);
				
				BooksAPI.getAll().then( (books) => {
					//console.log(books);
					//console.log(books.map( (book, index, array) => {return {title: book.title, status: book.shelf};}) );
					this.setState({mybooks: books});
					book.shelf = shelf;
				}).catch(function(error) {
				  //console.log('There has been a problem with your fetch operation: ' + error.message);
				});
			}
		);
	};
	
  render() {
    return (
      <div className="app">	  
				<Route exact path="/" render={ () => (
					<ListMyBooks mybooks={this.state.mybooks} updateBookShelf={this.updateBookShelf} />	
				)}/>
				<Route exact path="/search" render={ () => (
					<SearchBooks mybooks={this.state.mybooks} updateBookShelf={this.updateBookShelf} />
				)}/>
      </div>
    );
  }
}

export default App;