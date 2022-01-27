import React, { useState, useEffect } from 'react';
import planet from '../images/hoth.jpeg'
import Planet from './Planet'
import Axios from 'axios'
import '../styles/App.css'
import Error from './Error'
import Redirect from 'react-router'
import { Navigate } from 'react-router-dom';

export default function ResultsPage({error, weatherData}) {

  // const [weatherData, setWeatherData] = useState(null)
  // const [error, setError] = useState(false)

  // // const apiKey = 'c82709073957c8bbae4900187a3370f5' ANDREW
  // const apiKey = '2633a1483698ea57695b55437e395ee8' //SHAKHRAM

  // useEffect(async () => {
  //   await fetchData()
  // }, [error])

  // const fetchData = async () => {
  //   try {
  //     const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.city.toLowerCase()}&appid=${apiKey}`);
  //     if (!res.ok) {
  //       setError(true)
  //     } else {
  //       const obj = await res.json()
  //       console.log(obj)
  //       setError(false)
  //       setWeatherData(obj)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div style={{ width: '500px', height: '100%' }}>
      
      { 
      
      (error === true) ? <Navigate to='/error'/> : 
      
      weatherData && <Navigate to='/planet'/> 
      
      }    
      
      </div>
  )

}
