import React from 'react';
import './Cards.css';
import CountUp from 'react-countup';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return 'Loading...';
    }
    const today = (
    `${new Date(lastUpdate).getFullYear()}-${new Date(lastUpdate).getMonth()+1 < 10 ? `0${new Date(lastUpdate).getMonth()+1}` : `${new Date(lastUpdate).getMonth()+1}`}-${new Date(lastUpdate).getDate() < 10 ? `0${new Date(lastUpdate).getDate()}` : `${new Date(lastUpdate).getDate()}`}`)
    
    return (
        <div className="wrapper">
            <div className="card">
                <h2>Infected:</h2>
                <h1><CountUp start={0} end={confirmed.value} duration={1} separator={","} />
                    </h1>
                <h2>Last Update:</h2>
                <h2>{today}</h2>
            </div>
            <div className="card">
                <h2>Recovered:</h2>
                <h1>
                <CountUp start={0} end={recovered.value} duration={1} separator={","} />
                </h1>
                <h2>Last Update:</h2>
                <h2>{today}</h2>
            </div>
            <div className="card">
                <h2>Deaths:</h2>
                <h1>
                <CountUp start={0} end={deaths.value} duration={1} separator={","}/>
                </h1>
                <h2>Last Update:</h2>
                <h2>{today}</h2>
            </div>
        </div>
    )
}
export default Cards;
