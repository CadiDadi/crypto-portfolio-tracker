import React, { Component } from 'react'
import { withInvestments } from '../../../context/InvestmentProvider'
import './portfolio.css'
import Form from '../../../shared/Form'
import LittleBtcChart from '../LittleCharts/LittleBtcChart'
import LittleBchChart from '../LittleCharts/LittleBchChart'
import LittleEthChart from '../LittleCharts/LittleEthChart'
import LittleLtcChart from '../LittleCharts/LittleLtcChart'
import AddInvestmentForm from '../AddInvestmentForm/AddInvestmentForm'
import InvestmentList from '../InvestmentList/InvestmentList' 

class Portfolio extends Component {
    componentDidMount(){
        this.props.getInvestments() 
    }
    render(){
        // console.log(this.props.investments)
        // console.log(this.props.cryptoPriceGet)
        return (
            <div>
                <div className='little-charts-container'>
                    <div className='little-charts'>
                        <LittleBtcChart />
                        <LittleEthChart />
                        <LittleBchChart />
                        <LittleLtcChart />
                    </div>
                </div>
                <div className='user-input'>
                    <Form className='investments-form'
                        inputs={{ 
                                name: '', 
                                symbol: '',
                                amountPurchased: '', 
                                purchasePrice: '',
                                purchaseDate: '' 
                        }}
                        submit={inputs => this.props.addInvestment(inputs)}
                        render={props => <AddInvestmentForm {...props} />}
                    /> 
                </div>
                <InvestmentList 
                    currentInvestments={this.props.currentInvestments} 
                    cryptoPriceGet={this.props.cryptoPriceGet} />
            </div>
        )
    }
}

export default withInvestments(Portfolio)