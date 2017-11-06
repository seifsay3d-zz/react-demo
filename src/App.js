import React, { Component } from 'react'
import logo from './logo.svg';
import HotelListContainer from './containers/hotel/ListContainer';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-Redux Sorting</h1>
        </header>
        <HotelListContainer/>
      </div>
    );
  }
}

export default App;
