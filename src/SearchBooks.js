import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {

  render() {
		//const {books} = this.props;
		//const {books} = this.state;
	
		//console.log('Props', this.props);
		return (
			<div className="search-books">
				Search Books
				<input type="text" />
			</div>
		);
  }
	
}

export default SearchBooks;