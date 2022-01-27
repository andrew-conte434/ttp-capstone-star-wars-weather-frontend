import React, { useEffect, useState } from 'react'
import '../styles/Planet.css'
import { Context } from './Context'
import { useParams,useNavigate } from 'react-router-dom';

export default function Planet() {
    let params = useParams()
    let navigate = useNavigate()

    const [planet, setPlanet] = useState({
        name: '',
        description: '',
        imageUrl: '',
    })
    const [id, setId] = useState(1)

    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(false)

    const apiKey = '2633a1483698ea57695b55437e395ee8' //SHAKHRAM

    useEffect(async () => {
        getPlanetId()
        console.log(id)
        await fetchWeather()
        await fetchPlanet()
    }, [params])

    const fetchWeather = async () => {
        try {
            console.log(params.city)
            const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${params.city.toLowerCase()}&appid=${apiKey}`);
            console.log(res)
            if (!res.ok) {
                setError(true)
            } else {
                const obj = await res.json()
                console.log(obj)
                setError(false)
                setWeatherData(obj)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const fetchPlanet = async () => {
        try {
            const res = await fetch(`https://star-wars-weather-database.herokuapp.com/api/planets/${id}`)
            const obj = await res.json()
            console.log(obj)
            setPlanet(obj)
        } catch (error) {
            throw error
        }
    }

    function getPlanetId() {
        const temp = weatherData.main.temp
        console.log(temp)
        if (temp > 370) { //REALLY HOT!!!
            setId(1)
        } else if (temp <= 370 && temp > 300) {//TEMPERATE
            setId(3)
        } else {//COLD!
            setId(2)
        }
        console.log(id)
    }

    return (

        (error === true) ? navigate('/error') :

        <div className='planet-div'>

            <div>
                <img className='planet-image' src={planet.imageUrl} alt='representation of star wars planet' />
            </div>

            <div className='top'>
                <h1>Wow! It's 30 degrees? </h1>
            </div>

            <div className='middle'>
                <h1 className='middle-top'>It's like</h1>
                <h1 className='specific-planet-name'>{planet.name}</h1>
                <h1 className='middle-bottom'>out there</h1>
            </div>

            <div className='bottom'>
                <h1>Wind: 12mph, Sky: Overcast</h1>
            </div>

        </div>
    )
}  