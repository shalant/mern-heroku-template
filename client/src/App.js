import React from 'react';
import Regular from './components/Regular/Regular.js';
import MuiVersion from './components/MuiVersion/MuiVersion.js';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <h1>MERN IMAGE UPLOAD</h1>
      <Regular />
      <MuiVersion />
    </div>
  );
}

export default App;
