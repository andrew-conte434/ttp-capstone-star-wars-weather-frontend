import React, { useState } from 'react'
import logo from '../star-wars-logo.wine.svg'
import video from '../videos/star-wars-video.mp4'
import audio from '../audio/star-wars-music.mp3'
import '../styles/App.css'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {

	let navigate = useNavigate()

	const [city, setCity] = useState('')
	const [inputValue, setInputValue] = useState('')

	const handleClick = (e) => {
		e.preventDefault()
		navigate(`/${city}`)
	}

	const goToList = () => {
		navigate('/list')
	}

	return (
		<div className='home-page'>

			<video src={video} autoPlay muted id='video' />
			{/* <audio src={audio} autoPlay></audio> */}

			<div>
				<button className='my-list-btn' onClick={goToList}>MY LIST</button>
			</div>

			<div className='logo-div'>
				<img src={logo} className='star-wars-logo' alt='logo' />
				<h2 className='weather-logo'>Weather App</h2>
				<form onSubmit={(e) => handleClick(e)}>
					<input placeholder='ENTER CITY HERE...'
						onChange={(e) => setCity(e.target.value)}></input>
					<button className='enter-button' type='submit'>
						SEARCH
					</button>
				</form>
			</div>

		</div>
	)
}
