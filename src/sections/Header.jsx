import React from 'react'
import './Header.css'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header>
     {/* Until we get a real logo */}
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <ul>
          <a href="#home" className="column">Home</a>
          <a href="#about" className="column">About</a>
          <a href="#eps" className="column">Episodes</a>
          <a href="#osc" className="column">OSC</a>
        </ul>
      </nav>
      <div className="ctas">
        <a className='btn btn-secondary' href="#last-episode">Last Episode</a>
        <a className='btn btn-primary' href="#subscribe">Subscribe</a>
      </div>
    </header>
  )
}

export default Header