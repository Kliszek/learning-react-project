import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './Navigation';
import { NavRoutes } from './Navigation/routes';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <Routes>
            {NavRoutes.map(item => <Route key={item.key} path={item.address} element={item.component}>
            </Route>)}
          </Routes>
          <a
            className="hover:underline"
            href="https://github.com/Kliszek/learning-react-project/"
          >
            My project on GitHub
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
