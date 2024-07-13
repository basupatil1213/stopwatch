import React, {useState, useEffect} from 'react'
import TimeDisplay from '../TimeDisplayComponents/TimeDisplay'
import StopWatchControls from '../StopWatchControls/StopWatchControls'
import LapTimes from '../LapTimes/LapTimes';

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState<number[]>([]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isRunning) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
        setLaps([]);
    };
    const handleLap = () => {
        setLaps([...laps, time]);
    };

    return (
        <div>
            <TimeDisplay time={time} />
            <StopWatchControls isRunning={isRunning} onLap={handleLap} onReset={handleReset} onStart={handleStart}  onStop={handleStop} />
            <LapTimes laps={laps}/>
        </div>
    )
}

export default StopWatch