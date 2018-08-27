import React, { Component } from 'react';
import './App.css';
import Trend from 'react-trend';
import { GoogleSheet, GoogleSheetsApi } from '@lourd/react-google-sheet'


const weightData = [180,190,180,199,188,200,202,203];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Trend data={weightData} />
        <Trend
          data={weightData}
          autoDraw
          autoDrawDuration={3000}
          autoDrawEasing="ease-in"
        />
      </div>
    );
  }
}

export default App;
