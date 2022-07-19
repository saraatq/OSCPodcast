import React from 'react'
import './Header.css'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'

const Header = () => {
  return (
    <header>
     {/* Until we get a real logo */}
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <a className="nav-item" href="#home">Home</a>
          </li>
          <li>
            <a className="nav-item" href="#about">About</a>
          </li>
          <li>
            <a className="nav-item" href="#eps">Episodes</a>
          </li>
          <li>
            <a className="nav-item" href="#osc">OSC</a>
          </li>
          <li className="search-box">
              <button className="btn-search">
                <img src={search} alt="search"/>
              </button>
              <input className="input-search" type="text" placeholder="Search.."/>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header