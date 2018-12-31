import React from 'react'
import './Table.css'
import moment from 'moment'


const Table = props => {
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
                <th className="text-center">Person Name</th>
                <th className="text-center">Age</th>
                <th className="text-center">Company Name</th>
                <th className="text-center">Country</th>
                <th className="text-center">City</th>
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
                <td className="pt-3-half" contentEditable="true">{(((amountPurchased * USD) / (purchasePrice * amountPurchased)) -1).toFixed(2)}%</td>
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

export default Table
