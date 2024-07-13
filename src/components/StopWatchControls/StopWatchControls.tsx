import React from 'react'
import Button from '../../Utils/Button';

type StopWatchControlsProps = {
    isRunning: boolean;
    onStart: () => void;
    onStop: () => void;
    onReset: () => void;
    onLap: () => void;
}

const StopWatchControls = ({isRunning, onStart, onStop, onReset, onLap}: StopWatchControlsProps) => {
    return (
        <div className="controls">
            {!isRunning ? (
                <Button onClick={onStart} styles={'bg-red-600 text-black'} displayName='Start' />
            ) : (
                <Button onClick={onStop} styles={'bg-red-600 text-black'} displayName='Stop' />
            )}
            <Button onClick={onReset} styles={'bg-red-600 text-black'} displayName='Reset'/>
            <Button onClick={onLap} disabled={!isRunning} displayName='Lap' styles={`${isRunning ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}/>
        </div>
    )
}

export default StopWatchControls