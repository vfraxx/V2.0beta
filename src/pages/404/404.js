import React from 'react';
import './404.css';
import nf from '../../assets/notfound.mp4';
import { Link } from 'react-router-dom';

const FourZeroFour = ()=> {
  return (
    <div className='fzf-bg'>
        <video src={nf} autoPlay loop/>
        <div className='topl'>
            <p className='z'>404</p>
            <p className='err'>Error : Redacted</p>
            <Link to="/" ><button className='back'><span class="text">BACK</span></button></Link>
        </div>
    </div>
    
  )
}

export default FourZeroFour;