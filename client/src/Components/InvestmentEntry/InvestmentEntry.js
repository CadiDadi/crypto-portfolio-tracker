import React from 'react'
// import moment from 'moment'
import './InvestmentEntry.css'

const InvestmentEntry = props => {
    console.log(props)
    // curPrice & USD are from live API
    const { name, symbol, amountPurchased, purchasePrice, curPrice: { USD } }= props
    return(
        <div className='investment-entry'>
            <p className='investment-entry-elements-container'> 
                <span className='investment-entry-elements'>{name}</span>
                <span className='investment-entry-elements'>{symbol}</span>
                <span className='investment-entry-elements'>{amountPurchased}</span>
                <span className='investment-entry-elements'>${purchasePrice}</span>
                <span className='investment-entry-elements'>${USD}</span>
            </p>
        </div>
    ) 
}

export default InvestmentEntry