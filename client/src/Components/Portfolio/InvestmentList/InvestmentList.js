import React from "react";
import InvestmentEntry from "../InvestmentEntry/InvestmentEntry";
import "./InvestmentList.css";

const InvestmentList = ({ currentInvestments, cryptoPriceGet }) => {
  console.log(currentInvestments);
  return (
    
    <div className='investments-table'>
      <div className="headers-container">
      <div className='title-row'>
        <div className="sell-targets">Sell Targets</div>
        </div>
        <div className="heading">
          <span className="heads date">Date</span>
          {/* <span className="heads user">Time</span> */}
          <span className="heads name">Name</span>
          <span className="heads symbol">Symbol</span>
          <span className="heads amt-pur">Amount Purchased</span>
          <span className="heads pur-pri">Purchase Price</span>
          {/* <span className="heads fee">Transaction Fee</span> */}
          <span className="heads total-invested">Total Invested</span>
          <span className="heads summary1 cur-pri">Current Price</span>
          <span className="heads summary1">Current Value</span>
          <span className="heads summary1">Current ROI $</span>
          <span className="heads summary1">Current ROI %</span>
          <span className="heads">Target 2.5%</span>
          <span className="heads">Target 5%</span>
          <span className="heads">Target 7.5%</span>
        </div>
        <div className="entries-container">
          {currentInvestments.map(investment => (
            <InvestmentEntry
              {...investment}
              curPrice={cryptoPriceGet[investment.symbol]}
              key={investment._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentList;
