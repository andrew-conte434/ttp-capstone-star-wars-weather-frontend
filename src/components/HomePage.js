import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import logo from '../star-wars-logo.wine.svg'
import video from '../videos/background-space.mp4'
import '../App.css'
import axios from 'axios'
//import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ResultsPage from './ResultsPage'

export default function HomePage() {

	const [city, setCity] = useState("")
	const [inputValue, setInputValue] = useState("")

	return (
		city ? <ResultsPage city ={city} /> : (
		<div className='home-page'>
			<video src={video} autoPlay muted id='video' />
			<div className='logo-input'>
				<img src={logo} className='star-wars-logo' alt='logo' />
				<h2 className='weather-logo'>Weather App</h2>
				<input placeholder='ENTER CITY HERE...' 
					   onChange={(e) => setInputValue(e.target.value)}></input>
				<button className='enter-button' 
						onClick={() => {setCity(inputValue)}}>
							ENTER CITY
				</button>
			</div>
		</div>)
	)
}
