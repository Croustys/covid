import React from 'react'
import { Bar } from 'react-chartjs-2'

const Chart = ({data: {confirmed, recovered, deaths}}) => {
  if(!confirmed){
    return ''
  }
  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in Hungary` },
        }}
      />
    ) : null
  );
  return (
      <div>
        {barChart}
      </div>
  )
}
export default Chart;
