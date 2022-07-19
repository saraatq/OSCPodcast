import React from 'react'

import {Header, About, NewEps, Subscribe} from './sections'
// import Header from './sections/Header'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className='header'>
        <Header/>
      </div>
      <div className='about'>
        <About/>
      </div>
      <div className='neweps'>
        <NewEps/>
      </div>
      <div className='subscribe'>
        <Subscribe/>
      </div>
    </div>
  )
}

export default App