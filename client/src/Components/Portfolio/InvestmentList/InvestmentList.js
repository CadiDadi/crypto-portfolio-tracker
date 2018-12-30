import React from 'react'
import InvestmentEntry from '../InvestmentEntry/InvestmentEntry'
import './InvestmentList.css'

const InvestmentList = ({ currentInvestments, cryptoPriceGet }) => {
    console.log(currentInvestments)
    return(
        <div className='div1'>
            <div className='heading'> 
                <span className='heads'>Date</span>
                <span className='heads'>Time</span>
                <span className='heads'>Name</span>
                <span className='heads'>Symbol</span>
                <span className='heads'>Amount Purchased</span>
                <span className='heads'>Purchase Price</span>
                <span className='heads'>Total Invested</span>
                <span className='heads'>Current Price</span>
                <span className='heads'>Current Value</span>
                <span className='heads'>Current ROI $</span>
                <span className='heads'>Current ROI %</span>
                <span className='heads'>Target 2.5%</span>
                <span className='heads'>Target 5%</span>
                <span className='heads'>Target 7.5%</span>
            </div>
            <div className='div2'>
                { currentInvestments.map(investment => <InvestmentEntry {...investment} curPrice={cryptoPriceGet[investment.symbol]} key={investment._id} />) } 
            </div>
        </div>
    )
}

export default InvestmentList 

