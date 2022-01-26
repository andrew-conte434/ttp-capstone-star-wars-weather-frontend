import React, { useState, useEffect } from 'react';
import planet from "../images/hoth.jpeg"
import Planet from "./Planet"
import Axios from 'axios'
import '../App.css'
import Error from "./Error"

export default function ResultsPage(props) {

  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(false)

  // const apiKey = 'c82709073957c8bbae4900187a3370f5' ANDREW
  const apiKey = '2633a1483698ea57695b55437e395ee8' //SHAKHRAM

  useEffect(async () => {
    await fetchData()
  }, [error])

  const fetchData = async () => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.city.toLowerCase()}&appid=${apiKey}`);
      if (!res.ok) {
        setError(true)
      } else {
        const obj = await res.json()
        setError(false)
        setWeatherData(obj)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {error && <Error />}
      {weatherData && <Planet weatherData={weatherData} />}
    </div>
  )

}