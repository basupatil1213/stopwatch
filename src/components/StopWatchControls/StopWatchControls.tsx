import React from 'react';
import Button from '../../Utils/Button';

type StopWatchControlsProps = {
    isRunning: boolean;
    onStart: () => void;
    onStop: () => void;
    onReset: () => void;
    onLap: () => void;
};

const StopWatchControls = ({ isRunning, onStart, onStop, onReset, onLap }: StopWatchControlsProps) => {
    return (
        <div className="flex space-x-2 mt-4 items-center justify-center">
            {!isRunning ? (
                <Button onClick={onStart} styles="bg-green-600 text-white px-4 py-2 rounded-lg" displayName="Start" />
            ) : (
                <Button onClick={onStop} styles="bg-red-600 text-white px-4 py-2 rounded-lg" displayName="Stop" />
            )}
            <Button onClick={onReset} styles="bg-blue-600 text-white px-4 py-2 rounded-lg" displayName="Reset" />
            <Button
                onClick={onLap}
                disabled={!isRunning}
                styles={`${isRunning ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'} px-4 py-2 rounded-lg`}
                displayName="Lap"
            />
        </div>
    );
};

export default StopWatchControls;
