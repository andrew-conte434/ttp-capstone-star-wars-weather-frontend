import './styles/App.css';
import HomePage from './components/HomePage'
import ResultsPage from './components/ResultsPage'
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Planet from './components/Planet';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} /> 
          <Route path="/planet" element={<Planet />} />
          <Route exact path="/error" element={<Error />} />
          <Route exact path="/resultspage" element={<ResultsPage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
