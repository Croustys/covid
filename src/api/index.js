import axios from 'axios'
const datum = `${new Date().getMonth() + 1}-${new Date().getDate()-1}-${new Date().getFullYear()}`
const url = 'https://covid19.mathdro.id/api/'

export const dataFetch = async (country) => {
    if (country) {
        const changeAble = `${url}countries/${country}`
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(`${changeAble}`)
        return {confirmed, recovered, deaths, lastUpdate}
    }

    try{
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(`${url}countries/hun`)
        return {confirmed, recovered, deaths, lastUpdate}
    }
    catch(e) {
        console.log(e)
    }
}
export const fetchCountries = async () =>{
    try {
        const { data: { countries } } = await axios.get(`${url}countries`);
        const a = countries.map(country => country.name)
        return a
    }
    catch(e) {
        console.log(e)
    }
}

export const fetchOneWeek = async () => {
    try {
        const { data } = await axios.get(`${url}daily`)
        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    }
    catch(e)
    {console.log(e)}
}