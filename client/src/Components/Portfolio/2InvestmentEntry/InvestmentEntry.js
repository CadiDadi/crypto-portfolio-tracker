import React from 'react'
import moment from 'moment'
import './InvestmentEntry.css'

const InvestmentEntry = props => {
    console.log(props)
    // curPrice & USD are from live API
    const { purchaseDate, name, symbol, amountPurchased, purchasePrice, curPrice: { USD } } = props

    return (        
        <div className="card">
            <h3 className="card-header text-center font-weight-bold text-uppercase py-4">Investments</h3>
            <div className="card-body">
                <div id="table" className="table-editable">
                    <span className="table-add float-right mb-3 mr-2"><a href="#!" className="text-success"><i className="fas fa-plus fa-2x" aria-hidden="true" /></a></span>
                    <table className="table table-bordered table-responsive-md table-striped text-center">
                        <tbody>
                            <tr>
                                <th className="text-center">Date</th>
                                <th className="text-center">Time</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Symbol</th>
                                <th className="text-center">Amount Purchased</th>
                                <th className="text-center">Purchase Price</th>
                                <th className="text-center">Total Invested</th>
                                <th className="text-center">Current Price</th>
                                <th className="text-center">Current Value</th>
                                <th className="text-center">Current ROI $</th>
                                <th className="text-center">Current ROI %</th>
                                <th className="text-center">Target 2.5%</th>
                                <th className="text-center">Target 5%</th>
                                <th className="text-center">Target 7.5%</th>
                            </tr>
                            <tr>
                                <td className="pt-3-half" contentEditable="true">{moment(purchaseDate).format("MM/DD/YY")}</td>
                                <td className="pt-3-half" contentEditable="true">{moment(purchaseDate).format("hh:mma")}</td>
                                <td className="pt-3-half" contentEditable="true">{name}</td>
                                <td className="pt-3-half" contentEditable="true">{symbol}</td>
                                <td className="pt-3-half" contentEditable="true">{amountPurchased.toFixed(8)}</td>
                                <td className="pt-3-half" contentEditable="true">${purchasePrice.toFixed(2)}</td>
                                <td className="pt-3-half" contentEditable="true">${(purchasePrice * amountPurchased).toFixed(2)}</td>
                                <td className="pt-3-half" contentEditable="true">${USD.toFixed(2)}</td>
                                <td className="pt-3-half" contentEditable="true">${(amountPurchased * USD).toFixed(2)}</td>
                                <td className="pt-3-half" contentEditable="true">${(amountPurchased * (USD - purchasePrice)).toFixed(2)}</td>
                                <td className="pt-3-half" contentEditable="true">{(((amountPurchased * USD) / (purchasePrice * amountPurchased)) - 1).toFixed(2)}%</td>
                                <td className="pt-3-half" contentEditable="true">${(purchasePrice * 1.025).toFixed(2)}</td>
                                <td className="pt-3-half" contentEditable="true">${(purchasePrice * 1.05).toFixed(2)}</td>
                                <td className="pt-3-half" contentEditable="true">${(purchasePrice * 1.075).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default InvestmentEntry

// https://momentjs.com/docs/
// multiple classNames for some