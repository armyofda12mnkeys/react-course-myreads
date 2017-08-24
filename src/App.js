import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ListMyBooks from './ListMyBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './utils/BooksAPI';


class App extends Component {
	state = {
		/*
		booksCurrentlyReading: [],
		booksWantToRead: [],
		booksAlreadyRead: [],
		*/
		mybooks: []
	}; //will be array of book objects
	
  render() {
    return (
      <div className="app">	  
				<Route exact path="/" render={ () => (
					<ListMyBooks
						books     ={this.state.mybooks}
					/>					
				)}/>
				<Route exact path="/search" render={ () => (
					<SearchBooks books     ={this.state.mybooks} />
				)}/>
      </div>
    );
  }
}

export default App;
/*
						booksCurrentlyReading={this.state.booksCurrentlyReading}
						booksWantToRead      ={this.state.booksWantToRead}
						booksAlreadyRead     ={this.state.booksAlreadyRead} 
*/