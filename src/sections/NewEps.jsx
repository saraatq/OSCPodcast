import React from 'react'
import './NewEps.css'
import play from '../assets/play-button.png'

const NewEps = (props) => {
  // 3-> newest   0-> oldest
  return (
    <>
    <h1 class="ep-header">NEW EPISODES</h1>
    <div  class="grid-container">
      <div class ="ep3">
        <img class = "ep-img" src={props.new_eps[3].img} alt ={props.new_eps[3].name} ></img>
        <h3 class = "ep-title" >{props.new_eps[3].name}</h3>
        <a href={props.new_eps[3].url} target= "_blank" ><button type="button" class = "play-btn btn-alone"><img src={play} alt="play episode" ></img></button></a> 
      </div> 
      <div class ="ep2">
        <img class = "ep-img" src={props.new_eps[2].img} alt ={props.new_eps[2].name} ></img>
        <a href={props.new_eps[2].url} target= "_blank" ><button type="button" class = "play-btn"><img src={play} alt="play episode" ></img></button> </a>
        <h3 class = "ep-title" >{props.new_eps[2].name}</h3>
      </div> 
      <div class ="ep1">
        <img class = "ep-img" src={props.new_eps[1].img} alt ={props.new_eps[1].name} ></img>
        <a href={props.new_eps[1].url} target= "_blank" ><button type="button" class = "play-btn"><img src={play} alt="play episode" ></img></button></a>
        <h3 class = "ep-title" >{props.new_eps[1].name}</h3>
      </div> 
      <div class ="ep0">
        <img class = "ep-img" src={props.new_eps[0].img} alt ={props.new_eps[0].name} ></img>
        <a href={props.new_eps[0].url} target= "_blank" ><button type="button" class = "play-btn"><img src={play} alt="play episode" ></img></button></a>
        <h3 class = "ep-title" >{props.new_eps[0].name}</h3>
      </div> 
    </div>
    </>
  )

}

export default NewEps