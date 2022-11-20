import React, { useState, useEffect} from 'react';
import './timer.css';

function Timer () {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  let timer;
  useEffect (() => {
    timer = setInterval(() => {
     setSeconds(seconds + 1);
      if(seconds===59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000)

    return () => clearInterval(timer);
    
  });
  

  const restart = () => {
    setSeconds(0);
    setMinutes(0);
  }

  const stop = () => {
    clearInterval(timer);
  }



    
    return (
      <div className='container'>
        <h1 className='h1Time'>{minutes<10? '0'+minutes: minutes}:{seconds<10? '0'+seconds: seconds}</h1>
        <div>
          <button className='btn' onClick={restart}>Restart</button>
          <button className='btn' onClick={stop}>Stop</button>
        </div>
      </div>
    );
  }
  
  export default Timer;