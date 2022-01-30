import './styles/App.css';
import HomePage from './components/HomePage'
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Planet from './components/Planet';
import List from './components/List';

function App() {

  return (
    <div className="App">
      <Router>
          <Routes className='routes'>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/:city" element={<Planet />} />
            <Route exact path="/error" element={<Error />} />
            <Route exact path="/list" element={<List />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
