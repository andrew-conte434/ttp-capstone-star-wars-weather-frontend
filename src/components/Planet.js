import React, { useEffect, useState } from 'react'
import '../styles/Planet.css'
import { useParams, useNavigate, Link } from 'react-router-dom';
import selectPlanet from '../modules/planetSelect';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as ReactBootStrap from 'react-bootstrap'
import Loading from './Loading';

export default function Planet(props) {
    let params = useParams()
    let navigate = useNavigate()

    const [planets, setPlanets] = useState(null)
    let id = 1

    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetchData()
    }, [])

    const goToHome = () => {
        navigate('/')
    }

    const goToList = () => {
        navigate('/list')
    }

    const fetchData = async () => {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY
        try {
            console.log(params.city)
            const resWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city.toLowerCase()}&appid=${apiKey}`);
            setLoading(true)
            const resPlanets = await fetch(`https://star-wars-weather-database.herokuapp.com/api/planets/`)
            if (!resWeather.ok || !resPlanets.ok) {
                setError(true)
            } else {
                setError(false)
                const objWeather = await resWeather.json()
                const objPlanets = await resPlanets.json()
                setWeatherData(objWeather)
                setPlanets(objPlanets)

                setTimeout(function () {
                    setLoading(false)
                }, 2000)
            }
        } catch (error) {
            console.log(error)
        }
    }

    (weatherData && (id = (selectPlanet(weatherData.main.temp, weatherData.clouds.all,
        weatherData.weather[0].description) - 1)))

    if (error === true) {
        navigate('/error')
    }

    return (
        <>
            {loading ? <Loading /> :
                planets &&
                <div className='planet-div'>

                    <div>
                        <img className='planet-image' src={planets[id].imageUrl} alt='planet' />
                    </div>

                    <div className='top'>
                        <h1>{Math.floor(((weatherData.main.temp - 273.15) * 1.8) + 32)} degrees? {weatherData.
                            weather[0].description.charAt(0).toUpperCase()
                            + weatherData.weather[0].description.slice(1)}? </h1>
                    </div>

                    <button className='button' id='home-btn' onClick={goToHome}>RETURN HOME</button>

                    <button className='button' id='list-btn' onClick={goToList}>MY LIST</button>

                    <div className='middle'>
                        <h1 className='middle-top'>It's like</h1>
                        <h1 className='specific-planet-name'>{planets[id].name}</h1>
                        <h1 className='middle-bottom'>out there</h1>
                    </div>

                    <div className='bottom'>
                        <h1>{planets[id].quote}</h1>
                    </div>

                </div>}
        </>
    )
}