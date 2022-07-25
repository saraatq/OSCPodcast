import React from 'react'

import {Header, About, NewEps, Subscribe} from './sections'
import './App.css'

const App = () => {
  let new_eps = [{img:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhyg5iFTy6-3IAfjyDMkvqxBlarPuYks7yQQAqLY-Qrs41c-I", url:"https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9wbExCSzhfXw%3D%3D&episode=YTQ4YWQyOGQtYmIwNy00ODQ2LTg5ZTMtOGNhYTdkNDMxOThh", name:"Episode[46]: Technical Hiring With Aya Elgebeely", author:"null++: بالعربي‎"},
  {img:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhyg5iFTy6-3IAfjyDMkvqxBlarPuYks7yQQAqLY-Qrs41c-I", url:"https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9wbExCSzhfXw%3D%3D&episode=ZDA4ODQxNGEtYWIzYS00M2I0LTgzZjktNzZiMGYwODQ3NWFm", name:"Episode[54]: Single Page Apps, Server Side Rendering & Static Site Generators", author:"null++: بالعربي‎"},
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPa8yGO2jBfXgfBIbD1duiqhhQjnHC-lJAKdlNZsUJHpZm-qK", url:"https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5mZWVkYnVybmVyLmNvbS9Bc2tkZXZlbG9wZXI%3D&episode=dGFnOnNvdW5kY2xvdWQsMjAxMDp0cmFja3MvODU2MDM4MzEw", name:"EP60 - AskDeveloper Podcast - #لايف_مع_القهوة و حنجيب سيرة المهارات الأساسية للجونيور النهاردة‎", author:"AskDeveloper Podcast"},
  {img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVTPAyrcDAearNg0xnrtlIGv3np014iTawe3tul0qFaijuYQA", url:"https://podcasts.google.com/?feed=aHR0cHM6Ly9sZXhmcmlkbWFuLmNvbS9mZWVkL3BvZGNhc3Qv&episode=aHR0cHM6Ly9sZXhmcmlkbWFuLmNvbS8_cD00OTM0", name:"#267 – Mark Zuckerberg: Meta, Facebook, Instagram, and the Metaverse", author:"Lex Fridman Podcast"}]

  return (
    <div className='app'>
      <div className='header'>
        <Header/>
      </div>
      <div className='about'>
        <About/>
      </div>
      <div className='neweps'>
        <NewEps new_eps = {new_eps}/>
      </div>
      <div className='subscribe'>
        <Subscribe/>
      </div>
    </div>
  )
}

export default App