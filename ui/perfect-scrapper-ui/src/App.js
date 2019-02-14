import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppDrawer from "./containers/AppDrawer";
import {BrowserRouter} from 'react-router-dom'

class App extends Component {


  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <AppDrawer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
