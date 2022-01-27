import './styles/App.css';
import HomePage from './components/HomePage'
import ResultsPage from './components/ResultsPage'
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, PageWrapper } from 'react-router-dom';
import axios from 'axios'
import Navbar from './components/Navbar'
import Error from './components/Error';
import { Link } from 'react-router-dom';
import Planet from './components/Planet';

function App() {

  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(false)

  const [city, setCity] = useState('')

  // const apiKey = 'c82709073957c8bbae4900187a3370f5' ANDREW
  const apiKey = '2633a1483698ea57695b55437e395ee8' //SHAKHRAM

  useEffect(async () => {
    await fetchData()
  }, [error])

  const fetchData = async () => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=${apiKey}`);
      if (!res.ok) {
        setError(true)
      } else {
        const obj = await res.json()
        console.log(obj)
        setWeatherData(obj)
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage city={city} setCity={setCity}/>} /> 
          <Route exact path="/error" element={<Error />} />
          <Route exact path="/planet" element={<Planet weatherData={weatherData} />} /> 
          <Route exact path="/resultspage" element={<ResultsPage weatherData={weatherData} error={error}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
