import React from 'react';
import './Soon.css';
import gon from '../../assets/gon.mp4';
import { Link } from 'react-router-dom';

const Soon = ()=> {
  return (
    <div className='soon-bg'>
        <video src={gon} autoPlay loop className='gon'></video>
        <div className='so'>
            <p className='soon-p'>SOON</p>
            <Link to="/" ><button className='s-but'><span class="text">BACK</span></button></Link>
        </div>
    </div>
  )
}

export default Soon;