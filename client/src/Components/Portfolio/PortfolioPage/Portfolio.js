import React, { Component } from 'react'
import { withInvestments } from '../../../context/InvestmentProvider'
import './portfolio.css'
import Form from '../../../shared/Form'
// import Table from '../Table/Table'
import LittleBtcChart from '../LittleCharts/LittleBtcChart'
import LittleBchChart from '../LittleCharts/LittleBchChart'
import LittleEthChart from '../LittleCharts/LittleEthChart'
import LittleLtcChart from '../LittleCharts/LittleLtcChart'
import AddInvestmentForm from '../AddInvestmentForm/AddInvestmentForm'
import InvestmentList from '../InvestmentList/InvestmentList'

// import { toUnicode } from 'punycode' //what is this???

class Portfolio extends Component {
    componentDidMount(){
        this.props.getInvestments()
    }

    render(){
        console.log(this.props.investments)
        console.log(this.props.cryptoPriceGet)
        return (
            <div>
                {/* <Table /> */}
                <div className='little-charts'>
                    <LittleBtcChart />
                    <LittleEthChart />
                    <LittleBchChart />
                    <LittleLtcChart />
                </div>
                <Form className='investments-form'
                    inputs={{ 
                            name: '', 
                            symbol: '',
                            amountPurchased: '', 
                            purchasedPrice: '',
                            purchaseDate: '' 
                    }}
                    submit={inputs => this.props.addInvestment(inputs)}
                    render={props => <AddInvestmentForm {...props} />}
                /> 
                <InvestmentList 
                    currentInvestments={this.props.currentInvestments} 
                    cryptoPriceGet={this.props.cryptoPriceGet} />
            </div>
        )
    }
}

export default withInvestments(Portfolio)

