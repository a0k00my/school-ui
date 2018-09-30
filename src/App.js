import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentDetails from './pages/StudentDetails';
import ApplicationHeader from './components/ApplicationHeader';

class App extends Component {
  render() {
    return (
      <div>
        <ApplicationHeader/>
        <StudentDetails/>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <HeaderSchool/>
      // </div>
    );
  }
}

export default App;
