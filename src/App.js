import React from 'react';
import './App.css';
import {Cards, Chart} from './components'
import {dataFetch} from './api'

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const data = await dataFetch();
    this.setState({data: data})
  }
  render() {
    const { data } = this.state
    return (
      <div>
        <Cards data={data}/>
      </div>
    )
  }
}

export default App;
