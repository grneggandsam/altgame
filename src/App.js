import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Loop, Stage } from 'react-game-kit';


class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <Loop>
        <Stage>
          <World>
            <Body args={[0,0,75,75]} ref={(b) => this.body = b.body; }>
              // Sprites go here
            </Body>
          </World>
        </Stage>
      </Loop>
    );
  }
}

export default App;
