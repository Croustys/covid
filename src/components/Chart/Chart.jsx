import React, { useEffect, useState } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { fetchOneWeek } from '../../api'

const Chart = ({data: {confirmed, recovered, deaths}, country}) => {
  
  const [dailyData, setDailyData] = useState({})
  useEffect(() => {
    const fetchMyAPI = async () => {
      const data = await fetchOneWeek();

      setDailyData(data);
    };

    fetchMyAPI();
  }, []);
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
              backgroundColor: ['#DD1155', 'rgba(0, 255, 0, 0.65)', '#0C0C0C'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );
  const line = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#DD1155',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: '#0C0C0C',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );
  return (
      <div>
        {barChart}
        {line}
      </div>
  )
}
export default Chart;
