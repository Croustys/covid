import axios from 'axios'
//const datum = `${new Date().getMonth() + 1}-${new Date().getDate()-1}-${new Date().getFullYear()}`
const url = 'https://covid19.mathdro.id/api/countries/Hungary'
export const dataFetch = async () => {
    try{
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url)
        return {confirmed, recovered, deaths, lastUpdate}
    }
    catch(e) {
        console.log(e)
    }
}