import React from 'react';
import './App.css';
import { Cards, Chart, CountryPick } from './components'
import { dataFetch } from './api'
const katt = () => {
  window.open("https://www.youtube.com/channel/UCmUSwFUpkrdlR2KSxFJomww")
}

class App extends React.Component {
  state = {
    data: {},
    country: 'Hungary',
  }
  async componentDidMount() {
    const data = await dataFetch();
    this.setState({data: data})
    return data
  }
  handleCountryChange = async (country) => {
    const countryData = await dataFetch(country)
    this.setState({data: countryData, country: country})
  }
  render() {
    const { data, country } = this.state
    return (
      <div className="container">
        <CountryPick handleCountryChange={this.handleCountryChange} />
        <Cards data={data}/>
        <Chart data={data} country={country}/>
        <img onClick={katt} src="https://szeged365.hu/wp-content/uploads/2020/04/BeFunky-collage-scaled.jpg" alt="legysziTöltsdBeAKépet"></img>
      </div>
    )
  }
}

export default App;
