import React from 'react'
import { DecoderText } from '../../components/DecoderText/DecoderText';
import './One.css';
import Spline from '@splinetool/react-spline';
import Text from '../../components/text/Text';
import ScrollDown from '../../components/ScrollDown/ScrollDown';


function One() {
  return (
    <div className='f-bg'>
        <div className='matn1'>
            <DecoderText className='deco' text="AFRA - アフラ" delay={300} />
        </div>
        <div className='matn2'>
            <div className='ts1'><h2 className='des'>Designer</h2><span className='span'></span></div>
            <Text className='z-in' />
        </div>
        <div className='ty'><ScrollDown /></div>
        
        <div  className='sp'>
          <Spline className='en' scene="https://prod.spline.design/OPtpE3K2KZ6-mxjQ/scene.splinecode" />
          </div>
    </div>

  )
};

export default One;