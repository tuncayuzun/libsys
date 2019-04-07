import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./layout/Header";
import AddBook from "./components/AddBook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="LIB SYS"/>
        <br/>
        <div className="container">
            <AddBook/>
        </div>
      </div>
    );
  }
}

export default App;
