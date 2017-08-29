import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchFooter extends Component {

  render() {	
		//console.log('Props', this.props);
		return (
			<div className="open-search">
				<Link to="/search">Search</Link>
			</div>
		);
  }
	
}

export default SearchFooter;