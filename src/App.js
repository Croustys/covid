import React from 'react';
import './App.css';
import { Cards, Chart } from './components'
import { dataFetch } from './api'

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
        <img src="https://szeged365.hu/wp-content/uploads/2020/04/BeFunky-collage-scaled.jpg" alt="legysziTöltsdBeAKépet"></img>
      </div>
    )
  }
}

export default App;
