import React from 'react'
import moment from 'moment'
import './InvestmentEntry.css'

const InvestmentEntry = props => {
    console.log(props)
    // curPrice & USD are from live API
    const { purchaseDate, name, symbol, amountPurchased, purchasePrice, curPrice: { USD } }= props
    return(
        <div className='entry'>
            <p className='fields-container'> 
                <span className='fields'>{moment(purchaseDate).format("LL")}</span>
                <span className='fields'>{moment(purchaseDate).format("hh:mm:a")}</span>
                <span className='fields'>{name}</span>
                <span className='fields'>{symbol}</span>
                <span className='fields'>{amountPurchased}</span>
                <span className='fields'>${purchasePrice}</span>
                <span className='fields'>${USD}</span>
            </p>
        </div>
    ) 
}

export default InvestmentEntry

// https://momentjs.com/docs/