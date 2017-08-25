import * as React from 'react';
import './App.css';
import Hello from './components/Hello';
import {MySvg} from "./components/MySvg";

const logo = require('./logo.svg');

function App() {
  return (
    <div className="App">

        {Hello}
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
        <MySvg/>
      <Hello name="TypeScript" />
    </div>
  );
}

export default App;

