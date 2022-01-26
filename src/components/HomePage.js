import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import logo from '../star-wars-logo.wine.svg'
import video from '../videos/star-wars-video.mp4'
import audio from '../audio/star-wars-music.mp3'
import '../styles/App.css'
import axios from 'axios'
//import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ResultsPage from './ResultsPage'
import Navbar from './Navbar'

export default function HomePage() {

	const [city, setCity] = useState('')
	const [inputValue, setInputValue] = useState('')

	return (
		city ? <ResultsPage city={city} /> : (<div className='home-page'>

			<video src={video} autoPlay muted id='video' />
			<audio src={audio} autoPlay></audio>

			{/* <audio src={audio} type='mp3' muted='false' autoPlay /> */}
			{/* <audio src={audio} autoPlay></audio> */}

			{/* <iframe id='video'
				src="https://www.youtube.com/embed/MkRSmynqonM?start=50&autoplay=1&mute=1&modestbranding=1&fs=0&autohide=0&controls=0&showinfo=0"
				title="YouTube video player" frameborder="0"
				allowfullscreen>
			</iframe> */}

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
