import React from "react"
import moment from "moment"
import "./InvestmentEntry.css"
import { withInvestments } from "../../../context/InvestmentProvider"

class InvestmentEntry extends React.Component {
  constructor() {
    super()
  }

  handleDelete = id => {
    this.props.handleDeleteRouter(id)
  }

  handleEdit = id => {
      this.props.handleEditRouter(id)
  }

  render() {
    const {
        purchaseDate,
        name,
        symbol,
        amountPurchased,
        purchasePrice,
        fee,
        curPrice: { USD }  
    } = this.props;
 
    return (
      <div className="entry">
        <div className="fields-container">
            <span className='delete-button-container'>
                <button className='delete-button' onClick={() => this.handleDelete(this.props._id)}>
                Delete
                </button>
            </span>
          <span className="fields user">
            {moment(purchaseDate).format("MM/DD/YY")}
          </span>
          {/* <span className="fields user">
            {moment(purchaseDate).format("hh:mma")}
          </span> */}
          <span className="fields user">{name}</span>
          <span className="fields symbol">{symbol}</span>
          <span className="fields amount">{amountPurchased.toFixed(8)}</span>
          <span className="fields user purchase-price">${purchasePrice.toFixed(2)}</span>
          {/* Fees */}
          {/* <span className="fields user fees">${fee.toFixed(2)}</span> */}
          <div className="fields-container summary">
            {/* Total Invested */}
            <span className="fields total-invested">${(purchasePrice * amountPurchased - fee).toFixed(2)}</span>
            {/* Current Coin Price */}
            <span className="fields summary current-price">${USD.toFixed(2)}</span>
            {/* Current Value */}
            <span className="fields summary">${(amountPurchased * USD).toFixed(2)}</span>
            {/* Current ROI $ */}
            <span className="fields summary">${(amountPurchased * (USD - purchasePrice)).toFixed(2)}</span>
            {/* Current ROI % */}
            <span className="fields summary">{((amountPurchased * USD) / (purchasePrice * amountPurchased) - 1).toFixed(2)} %</span>
          </div>
          <span className="fields target1">${(USD * 1.025).toFixed(2)}</span>
          <span className="fields target2">  ${(USD * 1.05).toFixed(2)}</span>
          <span className="fields target3">${(USD * 1.075).toFixed(2)}</span>
        </div>
     </div>
    )
  }
}

export default withInvestments(InvestmentEntry)

// https://momentjs.com/docs/
