import React from 'react'
import InvestmentEntry from '../../InvestmentEntry/InvestmentEntry'
import './InvestmentList.css'

const InvestmentList = ({ currentInvestments, tickerGet }) => {
    console.log(currentInvestments)
    return(
        <div className='div1'>
            <div className='div2'>
                { currentInvestments.map(investment => <InvestmentEntry {...investment} curPrice={tickerGet[investment.symbol]} key={investment._id} />) } 
            </div>
        </div>
    )
}

export default InvestmentList 

