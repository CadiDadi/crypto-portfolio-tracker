import React from 'react'
import BigBtcChart from './BigCharts/BigBtcChart'
import BigLtcChart from './BigCharts/BigLtcChart'
import './ChartPage.css'

const ChartPage = () => {
    return(
        <div>
            <BigBtcChart />
            <BigLtcChart />
        </div>
    )
} 

export default ChartPage

