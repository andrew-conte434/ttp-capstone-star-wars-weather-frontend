import React, { useEffect, useState } from 'react'
import '../styles/Planet.css'
import { useParams, useNavigate, Link } from 'react-router-dom';
import selectPlanet from '../modules/planetSelect';

export default function Planet(props) {
    let params = useParams()
    let navigate = useNavigate()

    const [planets, setPlanets] = useState(null)
    let id = 1

    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(false)

    const apiKey = '2633a1483698ea57695b55437e395ee8' //SHAKHRAM

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        try {
            console.log(params.city)
            const resWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city.toLowerCase()}&appid=${apiKey}`);
            const resPlanets = await fetch(`https://star-wars-weather-database.herokuapp.com/api/planets/`)
            if (!resWeather.ok || !resPlanets.ok) {
                setError(true)
            } else {
                setError(false)
                const objWeather = await resWeather.json()
                const objPlanets = await resPlanets.json()
                await setWeatherData(objWeather)
                await setPlanets(objPlanets)
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
        (planets) &&
        <div className='planet-div'>

            <div>
                <img className='planet-image' src={planets[id].imageUrl} alt='planet' />
            </div>

            <div className='top'>
                <h1>{Math.floor(((weatherData.main.temp - 273.15) * 1.8) + 32)} degrees? {weatherData.
                    weather[0].description.charAt(0).toUpperCase()
                    + weatherData.weather[0].description.slice(1)}? </h1>
            </div>
            <div className='home-btn'>
                <Link to='/' className="return-home">
                    RETURN HOME
                </Link>
            </div>

            <div className='fave-btn'>
                <Link to='/list' className="add-fave">
                    MY LIST
                </Link>
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