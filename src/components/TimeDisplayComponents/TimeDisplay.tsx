import React from 'react'

type TimeDisplayProps = {
    time : number
}

const TimeDisplay = ({time}: TimeDisplayProps) => {

    const formatTime = (time: number) => {
        const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
        const seconds = Math.floor((time / 1000) % 60);
        const getSeconds = `0${seconds}`.slice(-2);
        const minutes = Math.floor((time / 60000) % 60);
        const getMinutes = `0${minutes}`.slice(-2);
    
        return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
      };
    
      return (
        <div className="display">
          {formatTime(time)}
        </div>
      );
}

export default TimeDisplay