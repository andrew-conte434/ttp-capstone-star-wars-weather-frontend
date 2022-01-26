import React, { useState, useEffect } from 'react';
import planet from "../images/hoth.jpeg"
import Planet from "../components/Planet"
import Axios from 'axios'
import '../App.css'

export default function ResultsPage(props) {
  
  const [weatherData, setWeatherData] = useState(null)
  const apiKey = 'c82709073957c8bbae4900187a3370f5'

  useEffect(async () => {
    await fetchData()
    console.log(weatherData)
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.city.toLowerCase()}&appid=${apiKey}`)
      const obj = await res.json()
      setWeatherData(obj)
    }catch(error){
      throw error
    }
  }

  return (
    weatherData ? <Planet weatherData = {weatherData}/> :
      (<div className="results-page">
            <img src={planet} className='planet'/>
        <div className="top">
          <h2> Brrrr. -3 c. Snow Shower?</h2>
        </div>
            <div className="middle">
              <h4>IT'S LIKE</h4>
              <h1>HOTH</h1>
              <h4>OUT THERE</h4>
            </div>
      <div className="bottom">
          <h4>Cold. Ice</h4>
          <h4>Freezing</h4>
      </div>

      </div>)
  )
}
