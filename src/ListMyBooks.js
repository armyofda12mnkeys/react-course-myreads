import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListMyBooks extends Component {

  render() {
		//const {books} = this.props;
		//const {books} = this.state;
	
		//console.log('Props', this.props);
		return (
			<div className="list-books">
				MyBooks:
				Currently Reading:
				Want to Read:
				Already Read:
				
			</div>
		);
  }
	
}

export default ListMyBooks;