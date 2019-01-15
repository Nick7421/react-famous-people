import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import FamousPeople from './components/FamousPeople'

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <Header />
      </header>
      <div class = "inputs">
      <FamousPeople />
      </div>
      </div>
    );
  }
}

export default App;
