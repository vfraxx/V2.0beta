import React from "react";
import "./Text.css";
import Typewriter from 'typewriter-effect';

const Text = ()=> {
  return (

    <div className="tw">
        <span className="plus">+</span>
            <h1 className="dev">
                <Typewriter
                    options={{
                      strings: ['DEVELOPER', 'ILLUSTRATOR','ANIMATOR','DREAMER', ':)'],
                      autoStart: true,
                      loop: true,
                      cursor: '-',
                    }}/></h1>
    </div>
  

  )
}

export default Text