import React from 'react';
import './App.css';
import { Cards, Chart } from './components'
import { dataFetch } from './api'
const katt = () => {
  window.open("https://www.youtube.com/channel/UCmUSwFUpkrdlR2KSxFJomww")
}

class App extends React.Component {
  state = {
    data: {},
  }
  async componentDidMount() {
    const data = await dataFetch();
    this.setState({data: data})
    return data
  }
  render() {
    const { data } = this.state
    return (
      <div className="container">
        <Cards data={data}/>
        <Chart data={data}/>
        <h1 className="höegy">Lelkisegély szolgálat<br />Fejeld meg a subot amíg szépen mondom</h1>
        <img onClick={katt} src="https://szeged365.hu/wp-content/uploads/2020/04/BeFunky-collage-scaled.jpg" alt="legysziTöltsdBeAKépet"></img>
      </div>
    )
  }
}

export default App;
