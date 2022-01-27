import '../styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../images/suns-logo.png'
import HomePage from './HomePage';
import { Navigate } from 'react-router-dom';
import { Route, Redirect } from 'react-router'

export default function Navbar() {

  return (
    <div className='nav-banner'>
      <div className='nav-header'>
        <img
          src={Logo}
          className='nav-logo'
        />
        <h1 id='unisearch'>StarCast</h1>
      </div>

      <div className='nav-links'>
        <Link to={'/'} className='nav-home'>Home</Link>
      </div>
    </div>
  );
}