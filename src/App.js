import React, { Component } from 'react';
import Header from './components/header';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
       
          <Header />
          <Menu />
    
      </BrowserRouter>
    )
  }
}
