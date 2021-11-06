import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import logo from './logo.svg';
import './App.css';
import MapChart from './modules/map/MapChart';

const App = (): any => {
  const [content, setContent] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default App;
