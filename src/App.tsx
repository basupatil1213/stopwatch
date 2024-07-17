import React from 'react';
import './App.css';
import StopWatch from './components/StopWatch/StopWatch';


function App() {
  return (
    <div className="App h-full">
      <header className="w-full py-6 bg-blue-600 text-white shadow-md h-[10vh]">
        <h1 className="text-center text-3xl font-bold">Stop Watch</h1>
      </header>
      <body className='h-[60vh]'>
        <StopWatch/>
      </body>
    </div>
  );
}

export default App;
