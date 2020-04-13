import React, {useState, useEffect} from 'react'
import { fetchCountries } from '../../api'
import './CountryPick.css'

const CountryPick = ( { handleCountryChange }) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
          setCountries(await fetchCountries());
        };
    
        fetchAPI();
      }, []);
    if(!countries) {
        return 'Loading...'
    }
    return (
        <div>
            <select className="dropDown" onChange={(e) => handleCountryChange(e.target.value)}>
                <option className="text-change" value="">Hungary</option>
                {countries.map((country, i) => <option className="text-change" key={i} value={country}>{country}</option>)}
           </select>
        </div>
    )
}
export default CountryPick;
