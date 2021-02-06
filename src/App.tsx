import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState<string>('No Data:(');

  useEffect(() => {
    const f = async () => {
      const res: string = await (await fetch('/.netlify/functions/hello-world')).json();
      setData(res);
    };

    f();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>{data}</h2>
      </header>
    </div>
  );
}

export default App;
