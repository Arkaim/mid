import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstIsActive: 'false',
      secondIsActive: 'false',
      thirdIsActive: 'false'
    };
  }


  firstdivClicked = () => {
    this.setState ({
      firstIsActive: 'true',
      secondIsActive: 'false',
      thirdIsActive: 'false'
    });
    console.log ('hey');
  }

  seconddivClicked = () => {
    this.setState ({
      firstIsActive: 'false',
      secondIsActive: 'true',
      thirdIsActive: 'false'
    });
    console.log ('hey');
  }

  thirddivClicked = () => {
    this.setState ({
      firstIsActive: 'false',
      secondIsActive: 'false',
      thirdIsActive: 'true'
    });
    console.log ('hey');
  }

  

  
  render() {
    return (
      <div className="App">
        <div className="menu">
        
          <div className={this.state.firstIsActive} onClick={this.firstdivClicked}>
            Contacts
          </div>
          <div className={this.state.secondIsActive} onClick={this.seconddivClicked}>
            About
          </div>
          <div className={this.state.thirdIsActive} onClick={this.thirddivClicked}>
            Gallery
          </div>
        </div>
      </div>
    );
  }
}

export default App;
