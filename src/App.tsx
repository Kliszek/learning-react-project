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
          <div className='max-w-xl md:max-w-2xl lg:max-w-4xl' id="content">
            <Routes>
              {NavRoutes.map(item => <Route key={item.key} path={item.address} element={item.component}>
              </Route>)}
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
