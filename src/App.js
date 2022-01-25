import './App.css';
import HomePage from './components/HomePage'
import ResultsPage from './components/ResultsPage'
import React, { useState } from "react"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import axios from 'axios'


function App() {
  
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
