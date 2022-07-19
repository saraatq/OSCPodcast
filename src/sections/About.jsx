import React from 'react'
import bg1 from '../AboutImgs/p1.jpg'
import bg2 from '../AboutImgs/p2.jpg'
import googlelogo from '../AboutImgs//logos/google.png'
import applelogo from '../AboutImgs//logos/apple.png'
import soundlogo from '../AboutImgs//logos/sound.png'
import spotifylogo from '../AboutImgs//logos/spotify.png'
import './About.css'
const About = () => {
  return (
    <div>
        <div className='wrapper'>
            <div className='left'>
                <div className='imgwrapper'>
                <img className='img1' src={bg1} alt="music" />
                <img className='img2' src={bg2} alt="headphones"/>
                </div>
            </div>
            <div className='right'>
                <h1 className='header1'>About the show</h1>
                <h3 className='headerarticle'>Start your podcast now with reliable hosting, in depth analytics, and customizable website.
                 Built-In Security. Download Stats. Import From Anywhere. Features: Download Stats & Analytics, Fast File Hosting, Built-In Security.
                 A podcast series about life in the Aussie bush, mateship & the RFDS in rural communities. Looking for an exciting podcast that will keep you
                  wanting more? Listen today!</h3>
                  <ul className='ul1'>
                      <li className='li1'>Created for and by entrepreneurs</li>
                      <li className='li1'>New episoder every week</li>
                      <li className='li1'>Interviews with world-class guests</li>
                  </ul>    
                  <button className='lmbutton' >Learn more</button>
            </div>
        </div>
        <div className='footer'>
            <h6 className='footerh'>Prodcasts available on </h6>
            
            <ul className='footerul'>
                <li className='footerli'><a className='logolink' href='#apple'><img className='footerlogos' src={applelogo} alt="apple logo" /></a></li>
                <li className='footerli'><a className='logolink' href='#spotify'><img className='footerlogos' src={spotifylogo} alt="spotify logo"/></a></li>
                <li className='footerli'><a className='logolink'  href='#google'><img className='footerlogos' src={googlelogo} alt="google logo"/></a></li>
                <li className='footerli'><a className='logolink'  href='#soundcloud'><img className='footerlogos' src={soundlogo} alt="soundcloud logo"/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default About