import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InputForm } from './InputForm';

function App() {
  const handleShowAlert = () => {
    alert("Hello React!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <InputForm username=""></InputForm>
        <button onClick={handleShowAlert}>Show Alert</button>
        <a
          className="App-link"
          href="https://github.com/Kliszek/learning-react-project/"
        >
          My project on github
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
