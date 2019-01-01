import React from 'react'
import './AddInvestmentForm.css'  

const AddInvestmentForm = props => {
       const { handleChange, handleSubmit, inputs: { purchaseDate, name, symbol, amountPurchased, purchasePrice } } = props 
       return(
              <form className='investment-form' onSubmit={handleSubmit}> 
                     <span className='entry1'>Entry:</span>
                     <input type="date" 
                            id="purchaseDate" 
                            name="purchaseDate"
                            value={purchaseDate}
                            onChange={handleChange}
                            min="2009-01-01" max="2099-12-31"
                     />
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
