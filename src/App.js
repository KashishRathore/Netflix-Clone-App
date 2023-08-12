import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import NetflixShow from './pages/NetflixShow';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/netflix-show" Component={NetflixShow} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
