import React from 'react';
import './What.css';
import { HiArrowSmRight } from 'react-icons/hi';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';


function What() {
  return (
    <div className='w-bg'>
      <div className='webdev'>
          <div className='skill'>
                <h1 className='s-h1'>Web Develope</h1>
                <p className='s-p'>i sketch websites and next develope them with reat js node js next js </p>
                <Link to='/dev'><button className='but'>Vew Projects <HiArrowSmRight className='arrow' /></button></Link>
            </div>
            <div className='threed'>
              <Spline scene="https://prod.spline.design/TWnsh8TQ2CPKHq98/scene.splinecode" />
          </div>
      </div>
      <div className='design'>
          <div className='skill2'>
                <h1 className='s-h1'>Design & Motion Design</h1>
                <p className='s-p'>i draw my ideas and animate them in after effects </p>
                <Link to='/soon'><button className='but'>Vew Arts<HiArrowSmRight className='arrow' /></button></Link>
            </div>
            <div className='threed'>
              <Spline scene="https://prod.spline.design/FAt8xPCjpyIlQWrv/scene.splinecode" />

          </div>
      </div>

    </div>
  )
}

export default What;