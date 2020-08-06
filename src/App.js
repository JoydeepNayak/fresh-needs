import React, { Component } from 'react';
import './App.css';
import Header from '../src/ui_components/Header';
import PageRoutes from './routes/PageRoutes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PageRoutes />
      </div>
    );
  }
}

export default App;
