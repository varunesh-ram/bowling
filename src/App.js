import React from 'react';
import './App.css';
import BowlingGame from './component/BowlingGame';
import { Constants } from './constants/Constants';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{Constants.HEADER}</h1>
      </header>
      <BowlingGame />
    </div>
  );
}

export default App;
