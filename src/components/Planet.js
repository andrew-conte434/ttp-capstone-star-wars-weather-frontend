import React, { useEffect, useState } from 'react'
import '../styles/Planet.css'
import { Context } from './Context'
import { useParams,useNavigate } from 'react-router-dom';
import selectPlanet from '../modules/planetSelect';

export default function (props) {
    let params = useParams()
    let navigate = useNavigate()

    const [planets, setPlanets] = useState(null)
    const [id, setId] = useState(1)

    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(false)

    const apiKey = '2633a1483698ea57695b55437e395ee8' //SHAKHRAM

    useEffect(() => {
        fetchWeather()
    }, [])

    const fetchWeather = async() => {
        try {
            console.log(params.city)
            const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${params.city.toLowerCase()}&appid=${apiKey}`);
            if (!res.ok) {
                setError(true)
            } else {
                const obj = await res.json()
                setError(false)
                setWeatherData(obj)
                console.log(obj)
                console.log(weatherData)
                fetchPlanets()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const fetchPlanets = async () => {
        try {
            const res = await fetch(`https://star-wars-weather-database.herokuapp.com/api/planets/`)
            const obj = await res.json()
            setPlanets(obj)
            console.log(planets)
            console.log(weatherData)
            setId(selectPlanet(weatherData.main.temp, weatherData.clouds.all,
                weatherData.weather[0].description)  - 1)
            
        } catch (error) {
            throw error
        }
    }
    
    return (
        (error === true) ? navigate('/error') : 
        (planets) && 
        <div className='planet-div'>

            <div>
                <img className='planet-image' src={planets[id].imageUrl} alt='planet' />
            </div>

            <div className='top'>
                <h1>{Math.floor(((weatherData.main.temp - 273.15) 
                        * 1.8) + 32)} degrees?  
                        {weatherData.weather[0].description}? </h1>
            </div>

            <div className='middle'>
                <h1 className='middle-top'>It's like</h1>
                <h1 className='specific-planet-name'>{planets[id].name}</h1>
                <h1 className='middle-bottom'>out there</h1>
            </div>

            <div className='bottom'>
                <h1>{planets[id].quote}</h1>
            </div>

        </div>
    )
}  