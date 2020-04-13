import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Welcome to <span className="framework">React</span>{' '}
        </h1>
        <img src="logo192.png" alt="" height="80px" />
        <p>
          You are using the{' '}
          <strong>
            <em className="framework">snak3react</em>
          </strong>{' '}
          CRA Template
        </p>
      </div>
    );
  }
}

export default App;
