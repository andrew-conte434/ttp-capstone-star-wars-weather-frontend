import { Link, BrowserRouter as Router, Routes, Navigate, Route, useNavigate } from 'react-router-dom'
import '../styles/Error.css'
import HomePage from './HomePage'
import { Context } from './Context'


export default function Error() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/')
    }

    return (

        <div className='error-page'>
            <div>
                <h1 className='error-title'>Oops. Couldn't find data on that city.</h1>
                <Link to='/'>BACK TO HOME</Link>
            </div>
            <>
                <img src="https://c.tenor.com/KGHNYLeVygwAAAAC/death-star-alderaan.gif" />
            </>
        </div>

    )
}