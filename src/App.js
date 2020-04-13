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
      </div>
    )
  }
}

export default App;
