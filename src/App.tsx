import React from 'react';
import logo from './logo.svg';
import './App.css';
import StopWatch from './components/StopWatch/StopWatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="flex justify-center">Stop Watch</h1>
      </header>
      <body>
        <StopWatch/>
      </body>
    </div>
  );
}

export default App;
