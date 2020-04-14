import React, {useEffect, useState} from 'react'
import {fetchOneWeek} from '../../api'

const Chart2 = () => {
    const [daily, setDaily] = useState({})
    useEffect(() => {
        const fetchAPI = async () => {
            const data = await fetchOneWeek()
        }
        fetchAPI()
    })

    return (
        <div>
            
        </div>
    )
}
export default Chart2;
