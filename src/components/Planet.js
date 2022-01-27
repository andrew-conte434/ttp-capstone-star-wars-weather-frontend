import React, { useEffect, useState } from 'react'
import '../styles/Planet.css'
import selectPlanet from '../modules/planetSelect';

export default function (props) {
    const [planets, setPlanets] = useState(null)
    const [id, setId] = useState(1)

    useEffect(async() => {
        try {
            const res =  await fetch(`https://star-wars-weather-database.herokuapp.com/api/planets/`)
            const obj =  await res.json()
            setPlanets(obj)
            setId(selectPlanet(props.weatherData.main.temp, props.weather.clouds.all,
                props.weatherData.weather[0].description)  - 1)
        } catch (error) {
            throw error
        }
    }, [])
    
    return (
        planets && <div className='planet-div'>

            <div>
                <img className='planet-image' src={planets[id].imageUrl} alt='planet' />
            </div>

            <div className='top'>
                <h1>Wow! It's 30 degrees? </h1>
            </div>

            <div className='middle'>
                <h1 className='middle-top'>It's like</h1>
                <h1 className='specific-planet-name'>{planets[id].name}</h1>
                <h1 className='middle-bottom'>out there</h1>
            </div>

            <div className='bottom'>
                <h1>Wind: 12mph, Sky: Overcast</h1>
            </div>

        </div>
    )
}  