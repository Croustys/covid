import React from 'react'
import {Line} from 'react-chartjs-2'
import { useState, useEffect } from 'react'
//import {dataFetch} from '../../api'

const Chart = ({data: {confirmed, recovered, deaths}}) => {
  const [chartData, setChartData] = useState({})
  const chart = () => {
    setChartData({
      labels: [confirmed, recovered, deaths],
      datasets: [
        {
          label: `hehe`,
          data: [1, 2, 3, 4, 5, 6],
          backgroundColor: [
            'rgb(215, 32, 3)'
          ],
          borderWidth: 1
        }
      ]
    }) 
  }
  useEffect(() => {
    chart()
  }, [])

  return (
      <div>
        <h1>Chartbtw</h1>
        <Line data={chartData} />
      </div>
  )
}
export default Chart;
