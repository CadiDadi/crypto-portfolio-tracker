import React from "react";
import InvestmentEntry from "../InvestmentEntry/InvestmentEntry";
import "./InvestmentList.css";

const InvestmentList = ({ currentInvestments, cryptoPriceGet }) => {
  console.log(currentInvestments);
  return (
    <div className="headers-container">
      <div className="heading">
        <span className="heads user">Date</span>
        <span className="heads user">Time</span>
        <span className="heads user">Name</span>
        <span className="heads user">Symbol</span>
        <span className="heads user">Amount Purchased</span>
        <span className="heads user">Purchase Price</span>
        <span className="heads summary1">Total Invested</span>
        <span className="heads summary1">Current Price</span>
        <span className="heads summary1">Current Value</span>
        <span className="heads summary1">Current ROI $</span>
        <span className="heads summary1">Current ROI %</span>
        <span className="heads">Target 2.5%</span>
        <span className="heads">Target 5%</span>
        <span className="heads">Target 7.5%</span>
      </div>
      <div className="div2">
        {currentInvestments.map(investment => (
          <InvestmentEntry
            {...investment}
            curPrice={cryptoPriceGet[investment.symbol]}
            key={investment._id}
          />
        ))}
      </div>
    </div>
  );
};

export default InvestmentList;
