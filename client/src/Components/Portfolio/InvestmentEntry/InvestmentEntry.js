import React from 'react'
import moment from 'moment'
import './InvestmentEntry.css'

const InvestmentEntry = props => {
    console.log(props)
    // curPrice & USD are from live API
    const { purchaseDate, name, symbol, amountPurchased, purchasePrice, curPrice: { USD } }= props
    const totalInvested = {amountPurchased} * {purchasePrice}
    console.log(totalInvested)

    return(
        <div>
            <div className='entry'>
                <p className='fields-container'> 
                    <span className='fields'>{moment(purchaseDate).format("MM/DD/YY")}</span>

                    <span className='fields'>{moment(purchaseDate).format("hh:mma")}</span>
                    <span className='fields'>{name}</span>
                    <span className='fields'>{symbol}</span>
                    <span className='fields'>{amountPurchased.toFixed(8)}</span>
                    <span className='fields'>${purchasePrice.toFixed(2)}</span>
                    <span className='fields'>{`${purchasePrice.toFixed(2)} * ${amountPurchased.toFixed(2)}`}</span>

                    <span className='fields'>${USD}</span>
                </p>
            </div>
        </div>
    ) 
}

export default InvestmentEntry

// https://momentjs.com/docs/



