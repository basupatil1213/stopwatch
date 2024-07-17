import React, { useState, useEffect } from 'react';
import TimeDisplay from '../TimeDisplayComponents/TimeDisplay';
import StopWatchControls from '../StopWatchControls/StopWatchControls';
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
        <div className="flex items-center justify-center h-[90vh] bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-2/3 flex">
                <div className="w-3/4 pr-4">
                    <TimeDisplay time={time} />
                    <StopWatchControls
                        isRunning={isRunning}
                        onLap={handleLap}
                        onReset={handleReset}
                        onStart={handleStart}
                        onStop={handleStop}
                    />
                </div>
                <div className="w-1/4 pl-4">
                    <LapTimes laps={laps} />
                </div>
            </div>
        </div>
    );
}

export default StopWatch;
