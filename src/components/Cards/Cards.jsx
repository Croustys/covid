import React from 'react';
import './Cards.css';
import CountUp from 'react-countup';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return 'Loading...';
    }
    return (
        <div className="wrapper">
            <div className="card">
                <h1>Infected:</h1>
                <h2><CountUp
                    start={0}
                    end={confirmed.value}
                    duration={1}
                    separator={","}
                 /></h2>
                <h1>Last Update:</h1>
                <h2>{new Date(lastUpdate).getFullYear()}-
                {new Date(lastUpdate).getMonth() < 10 ? `0${new Date(lastUpdate).getMonth()}` : `${new Date(lastUpdate).getMonth()}`}-
                {new Date(lastUpdate).getDay() < 10 ? `0${new Date(lastUpdate).getDay()}` : `${new Date(lastUpdate).getDay()}`}</h2>
            </div>
            <div className="card">
                <h1>Recovered:</h1>
                <h2>
                <CountUp
                    start={0}
                    end={recovered.value}
                    duration={1}
                    separator={","}
                 />
                </h2>
                <h1>Last Update:</h1>
                <h2>{new Date(lastUpdate).getFullYear()}-
                {new Date(lastUpdate).getMonth() < 10 ? `0${new Date(lastUpdate).getMonth()}` : `${new Date(lastUpdate).getMonth()}`}-
                {new Date(lastUpdate).getDay() < 10 ? `0${new Date(lastUpdate).getDay()}` : `${new Date(lastUpdate).getDay()}`}</h2>
            </div>
            <div className="card">
                <h1>Deaths:</h1>
                <h2>
                <CountUp
                    start={0}
                    end={deaths.value}
                    duration={1}
                    separator={","}
                 />
                </h2>
                <h1>Last Update:</h1>
                <h2>{new Date(lastUpdate).getFullYear()}-
                {new Date(lastUpdate).getMonth() < 10 ? `0${new Date(lastUpdate).getMonth()}` : `${new Date(lastUpdate).getMonth()}`}-
                {new Date(lastUpdate).getDay() < 10 ? `0${new Date(lastUpdate).getDay()}` : `${new Date(lastUpdate).getDay()}`}</h2>
            </div>
        </div>
    )
}
export default Cards;
