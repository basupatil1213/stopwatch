import React from 'react'

type LapTimesProps = {
    laps: number[]
}

const LapTimes = ({ laps }: LapTimesProps) => {
    return (
        <div className="lap-times">
            <h2>Lap Times</h2>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>
                        {index + 1}. {lap}ms
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LapTimes