import './styles/App.css';
import HomePage from './components/HomePage'
import ResultsPage from './components/ResultsPage'
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Planet from './components/Planet';
import ContextProvider from '../src/components/Context'

function App() {

  return (
    <div className="App">
      <Router>
        <ContextProvider>
          <Routes className='routes'>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/:city" element={<Planet />} />
            <Route exact path="/error" element={<Error />} />
          </Routes>
        </ContextProvider>
      </Router>
    </div>
  );
}

export default App;
