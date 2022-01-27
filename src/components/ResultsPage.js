// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Planet from './Planet'
// import '../styles/App.css'
// import { Navigate } from 'react-router-dom';
// import Error from './Error';
// import HomePage from './HomePage';
// import { Context } from './Context'

// export default function ResultsPage({ city }) {
//   // const { weatherData, error, fetchData  } = useContext(Context);

//   const [weatherData, setWeatherData] = useState(null)

//   const [error, setError] = useState(false)

//   // const apiKey = 'c82709073957c8bbae4900187a3370f5' ANDREW
//   // const apiKey = '2633a1483698ea57695b55437e395ee8' //SHAKHRAM

//   // useEffect(async () => {
//   //   await fetchWeather()
//   // }, [error])

  
//   return (
//     <div style={{ width: '500px', height: '100%' }}>

//       {

//         (error === true) ? <Navigate to='/error' /> :

//           weatherData && <Navigate to='/planet' />

//       }

//     </div>
//   )

// }
