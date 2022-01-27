import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export const Context = createContext({
    weatherData: null,
    apiKey: '2633a1483698ea57695b55437e395ee8',
    error: false,
    planet: {
        name: '',
        description: '',
        imageUrl: '',
    },
    id: 1,
    city: '',
    inputValue: '',
    fetchWeather: () => { },
    fetchPlanets: () => { },
})

export default function ContextKeeper(props) {
    const navigate = useNavigate();

    //fetch weather data based on city name input from the user
    const [weatherData, setWeatherData] = useState(null)

    //error is true if the city cannot be found
    const [error, setError] = useState(false)

    //planet is set after a city has been found
    const [planets, setPlanets] = useState(null)

    //this is used to get planets by their id
    const [id, setId] = useState(1)

    const [city, setCity] = useState('')
    const [inputValue, setInputValue] = useState('')

    const fetchWeather = async () => {
        let apiKey = '2633a1483698ea57695b55437e395ee8'
        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=${apiKey}`);
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

    const fetchPlanets = async () => {
        try {
            const res = await fetch(`https://star-wars-weather-database.herokuapp.com/api/planets/`)
            const obj = await res.json()
            console.log(obj)
            setPlanets(obj)
        } catch (error) {
            throw error
        }
    }

    return (
        <Context.Provider value={{
            weatherData: weatherData,
            error: error,
            planets: planets,
            id: id,
            city: city,
            inputValue: inputValue,
            fetchWeather: fetchWeather,
            fetchPlanet: fetchPlanets
        }}>
            {props.children}
        </Context.Provider>
    )
}