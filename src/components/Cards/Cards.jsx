import React from 'react'
import div from '../style'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return 'Loading...';
    }
    return (
        <div style={div}>
            <h1>Infected: {confirmed.value}</h1>
            <h1>Recovered: {recovered.value}</h1>
            <h1>Deaths: {deaths.value}</h1>
            <h1>Last Update: {new Date(lastUpdate).getFullYear()}-
            {new Date(lastUpdate).getMonth() < 10 ? `0${new Date(lastUpdate).getMonth()}` : `${new Date(lastUpdate).getMonth()}`}-
            {new Date(lastUpdate).getDay()}</h1>
        </div>
    )
}
export default Cards;
