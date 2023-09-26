import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div className='Navbar-header Nav-column'>
        <h1>Welcome to BingeBuddy</h1>
        <div className='Nav-row'>
            <Link to='/' className='Nav-link'>Movie</Link>
            |
            <Link to='/anime' className='Nav-link'>Anime</Link>
            |
            <Link to='/shows' className='Nav-link'>TV Shows</Link>
        </div>
    </div>
  )
}

export default navbar