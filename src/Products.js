import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product.js'

class Products extends Component {
  constructor() {
    super();
    this.state = {
      MilkIsClicked: 'false',
      BreadIsClicked: 'false',
      CandyIsClicked: 'false',
      total: 0
    };
  }

  MilkClicked =() => {
    var newTotal = this.state.total + 200
    this.setState({
      MilkIsClicked: 'true',
      total: newTotal
    });
  }

  BreadClicked =() => {
    var newTotal = this.state.total + 100
    this.setState({
      BreadIsClicked: 'true',
      total: newTotal
    });
  }

  CandyClicked =() => {
    var newTotal = this.state.total + 250
    this.setState({
      CandyIsClicked: 'true',
      total: newTotal
    });
  }
  

  
  render() {
    return (
      <div className="products">
      <h2>Products List</h2>
      
      <div className = {this.state.MilkIsClicked} onClick = {this.MilkClicked}> Milk 200$ </div>
      <div className = {this.state.BreadIsClicked} onClick = {this.BreadClicked}> Bread 100$ </div>
      <div className = {this.state.CandyIsClicked} onClick = {this.CandyClicked}> Candy 250$ </div>

        
      <h4>Total: {this.state.total} </h4>
      </div>
      
    );
  }
}

export default Products;