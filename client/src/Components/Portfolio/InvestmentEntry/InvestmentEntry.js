import React from 'react'
import moment from 'moment'
import './InvestmentEntry.css'

const InvestmentEntry = props => {
    console.log(props)
    // curPrice & USD are from live API
    const { purchaseDate, name, symbol, amountPurchased, purchasePrice, curPrice: { USD } } = props
    const totalInvested = {amountPurchased} * {purchasePrice}
    console.log(totalInvested)

    return(
            <div className='entry'>
                <div className='fields-container'> 
                    <span className='fields user'>{moment(purchaseDate).format("MM/DD/YY")}</span>
                    <span className='fields user'>{moment(purchaseDate).format("hh:mma")}</span>
                    <span className='fields user'>{name}</span>
                    <span className='fields user'>{symbol}</span>
                    <span className='fields user'>{amountPurchased.toFixed(8)}</span>
                    <span className='fields user'>${purchasePrice.toFixed(2)}</span>
                    <div className='fields-container summary'>
                        <span className='fields summary'>${(purchasePrice * amountPurchased).toFixed(2)}</span>
                        <span className='fields summary'>${USD.toFixed(2)}</span>
                        <span className='fields summary'>${(amountPurchased * USD).toFixed(2)}</span>
                        <span className='fields summary'>${(amountPurchased * (USD - purchasePrice)).toFixed(2)}</span>
                        <span className='fields'>{(((amountPurchased * USD) / (purchasePrice * amountPurchased)) -1).toFixed(2)}%</span>
                    </div>
                    <span className='fields'>${(purchasePrice * 1.025).toFixed(2)}</span>
                    <span className='fields'>${(purchasePrice * 1.05).toFixed(2)}</span>
                    <span className='fields'>${(purchasePrice * 1.075).toFixed(2)}</span>
                </div>
            </div>
    ) 
}

export default InvestmentEntry

// https://momentjs.com/docs/



