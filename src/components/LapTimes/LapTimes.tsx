import React from 'react';

type LapTimesProps = {
    laps: number[];
};

const LapTimes = ({ laps }: LapTimesProps) => {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Lap Times</h2>
            <ul className="list-decimal pl-6">
                {laps.map((lap, index) => (
                    <li key={index} className="mb-1">
                        Lap {index + 1}: {new Date(lap).toISOString().slice(14, 23)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LapTimes;
