import React from "react";
import "./AddInvestmentForm.css";

const AddInvestmentForm = props => {
  const {
    handleChange,
    handleSubmit,
    inputs: { purchaseDate, name, symbol, amountPurchased, purchasePrice, fee }
  } = props;
  return (
    <form className="investment-form" onSubmit={handleSubmit}>
      <span className="entry1">Entry:</span>
      <input
        type="date"
        id="purchaseDate"
        name="purchaseDate"
        value={purchaseDate}
        onChange={handleChange}
        min="2009-01-01"
        max="2099-12-31"
      />
      <select className="selectors" value={name} onChange={handleChange} name="name">
        <option value="Select Coin">Select Coin</option>
        <option value="Bitcoin">Bitcoin</option>
        <option value="Ethereum">Ethereum</option>
        <option value="Bitcoin Cash">Bitcoin Cash</option>
        <option value="Litecoin">Litecoin</option>
      </select>
      <select className="selectors"  value={symbol} onChange={handleChange} name="symbol">
        <option value="Symbol">Symbol</option>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="BCH">BCH</option>
        <option value="LTC">LTC</option>
      </select>
      <input
        type="number"
        name="amountPurchased"
        value={amountPurchased}
        onChange={handleChange}
        placeholder="Amount Purchased"
      />
      <input
        type="number"
        step="0.00000001"
        name="purchasePrice"
        value={purchasePrice}
        onChange={handleChange}
        placeholder="Purchase Price"
      />
      <input
        type="number"
        step="0.01"
        name="fee"
        value={fee}
        onChange={handleChange}
        placeholder="Transaction Fee"
      />
      <button className="submit">Submit</button>
    </form>
  );
}; 

export default AddInvestmentForm;
