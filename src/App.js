import './App.css';
import HomePage from './components/HomePage'
import ResultsPage from './components/ResultsPage'
import React, { useState } from "react"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import axios from 'axios'


function App() {

  const [data, setData] = useState()
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage setData={setData} />} />
        <Route exact path='/results' element={<ResultsPage data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
