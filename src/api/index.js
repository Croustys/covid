import axios from 'axios'
//const datum = `${new Date().getMonth() + 1}-${new Date().getDate()-1}-${new Date().getFullYear()}`
const url = `https://covid19.mathdro.id/api/`

export const dataFetch = async () => {
    try{
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url)
        return {confirmed, recovered, deaths, lastUpdate}
    }
    catch(e) {
        console.log(e)
    }
}
export const dailydataFetch = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`, { headers: {'Access-Control-Allow-Origin': "*"} } )
        const modData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            recovered: dailyData.recovered.total,
            deaths: dailyData.deaths.total
        }))
        console.log(modData)
        return modData
    }
    catch(e) {
        console.log(e)
    }
}