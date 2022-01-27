import React, { useState } from 'react'
import logo from '../star-wars-logo.wine.svg'
import video from '../videos/star-wars-video.mp4'
import audio from '../audio/star-wars-music.mp3'
import '../styles/App.css'

import ResultsPage from './ResultsPage'


export default function HomePage() {

	const [city, setCity] = useState('')
	const [inputValue, setInputValue] = useState('')

	return (
		city ? <ResultsPage city={city} /> : (<div className='home-page'>

			<video src={video} autoPlay muted id='video' />
			<audio src={audio} autoPlay></audio>

			<div className='logo-div'>
				<img src={logo} className='star-wars-logo' alt='logo' />
				<h2 className='weather-logo'>Weather App</h2>
				<input placeholder='ENTER CITY HERE...'
					onChange={(e) => setInputValue(e.target.value)}></input>
				<button className='enter-button'
					onClick={() => { setCity(inputValue) }}>
					ENTER CITY
				</button>
			</div>

		</div>)
	)
}
