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
          <li>
            <a className="column" href="#home">Home</a>
          </li>
          <li>
            <a className="column" href="#about">About</a>
          </li>
          <li>
            <a className="column" href="#eps">Episodes</a>
          </li>
          <li>
            <a className="column" href="#osc">OSC</a>
          </li>
          <li>
            <a className='btn btn-secondary' href="#last-episode">Last Episode</a>
          </li>
          <li>
            <a className='btn btn-primary' href="#subscribe">Subscribe</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header