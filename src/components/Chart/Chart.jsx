import React, {useEffect, useState} from 'react'
import {dataFetch} from '../../api'
import {Line, Bar} from 'react-chartjs-2'

const Chart = ({ data: { confirmed, recovered, deaths }}) => {
    const [data, setData] = useState({})
    useEffect(() => {
        const fetchAPI = async () => {
            setData(await dataFetch())
        }
        fetchAPI()
    })
    const lineChart = (
        data[0] ? (
          <Line
            data={{
              labels: data.map(({ date }) => date),
              datasets: [{
                data: data.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              }, {
                data: data.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },
              ],
            }}
          />
        ) : null
      );

    return (
        <div>
            {lineChart}
        </div>
    )
}
export default Chart;
