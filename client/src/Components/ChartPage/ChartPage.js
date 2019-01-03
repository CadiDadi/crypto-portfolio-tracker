import React from 'react'
import BigBtcChart from './BigCharts/BigBtcChart'
import BigEthChart from './BigCharts/BigEthChart'
import BigBchChart from './BigCharts/BigBchChart'
import BigLtcChart from './BigCharts/BigLtcChart'
import './ChartPage.css'

const ChartPage = () => {
    return(
        <div className='charts-container'>
            <BigBtcChart />
            <BigEthChart />
            <BigBchChart />
            <BigLtcChart />
        </div>
    )
} 

export default ChartPage

