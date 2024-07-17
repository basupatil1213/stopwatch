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
        <div className="flex items-center justify-center h-[40vh] w-[80vh] bg-gray-100">
            <div className="text-center bg-white p-4 rounded-lg shadow-md">
                <div className="text-2xl font-mono text-gray-700">
                    {formatTime(time)}
                </div>
            </div>
        </div>
    );
}

export default TimeDisplay
