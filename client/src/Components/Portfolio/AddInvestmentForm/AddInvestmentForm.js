import React from 'react'
import './AddInvestmentForm.css'

const AddInvestmentForm = props => {
    const { handleChange, handleSubmit, inputs: { name, symbol, amountPurchased, purchasePrice } } = props
    return(
        <form className='investment-form' onSubmit={handleSubmit}> 
            <input type='text' 
                name='name'
                value={name}
                onChange={handleChange} 
                placeholder='Name'
            />
            <input type='text' 
                name='symbol'
                value={symbol}
                onChange={handleChange} 
                placeholder='Symbol'
            />
            <input type='number' 
                name='amountPurchased'
                value={amountPurchased}
                onChange={handleChange} 
                placeholder='Amount Purchased'
            />
            <input type='number' step="0.00000001"
                name='purchasePrice'
                value={purchasePrice}
                onChange={handleChange} 
                placeholder='Purchase Price'
            />
            <button>Submit</button>
        </form>
    )
}

export default AddInvestmentForm

// todo
    // date purchased
    // where purchased
    // etc