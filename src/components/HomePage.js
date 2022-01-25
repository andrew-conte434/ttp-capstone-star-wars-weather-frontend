import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../star-wars-logo.wine.svg'
import video from '../videos/background-space.mp4'
import '../App.css'
import axios from 'axios'
import ResultsPage from './ResultsPage'

export default function HomePage({data,setData}) {

	const [city, setCity] = useState()

	const APIKey = 'c82709073957c8bbae4900187a3370f5'

	const getCity = () => {
		axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=c82709073957c8bbae4900187a3370f5`)
			.then((response) => setData(response.data))
	     }

	return (
		<div className='home-page'>
			<video src={video} autoPlay muted id='video' />
			<div className='logo-input'>
				<img src={logo} className='star-wars-logo' alt='logo' />
				<h2 className='weather-logo'>Weather App</h2>
				<input placeholder='ENTER CITY HERE...' onChange={(e) => setCity(e.target.value)}></input>
				<Link to="./results">
				<button className='enter-button' onClick={getCity}>ENTER CITY</button>
				</Link>
			</div>
		</div>
	)
}
