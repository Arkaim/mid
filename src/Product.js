import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Product extends Component {
  


  render() {
    return (
       <li onClick={this.props.totalCount}>
        {this.props.name}
       </li>

    );
  }
}

export default Product;