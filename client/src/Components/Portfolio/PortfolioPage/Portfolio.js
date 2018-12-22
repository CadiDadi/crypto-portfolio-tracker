import React, { Component } from 'react'
import { withInvestments } from '../../../context/InvestmentProvider'
import './portfolio.css'
import Form from '../../../shared/Form'
import AddInvestmentForm from '../AddInvestmentForm/AddInvestmentForm'
import InvestmentList from '../InvestmentList/InvestmentList'
import LittleBtcChart from '../LittleCharts/LittleBtcChart'
import LittleBchChart from '../LittleCharts/LittleBchChart'
import LittleEthChart from '../LittleCharts/LittleEthChart'
import LittleLtcChart from '../LittleCharts/LittleLtcChart'

// import { toUnicode } from 'punycode';

class Portfolio extends Component {
    componentDidMount(){
        this.props.getInvestments()
    }

    render(){
        console.log(this.props.investments)
        console.log(this.props.cryptoPriceGet)
        return (
            <div>

                <Form className='investments-form'
                    inputs={{ name: '', 
                              symbol: '',
                              amountPurchased: '', 
                              purchasedPrice: '' 
                    }}
                    submit={inputs => this.props.addInvestment(inputs)}
                    render={props => <AddInvestmentForm {...props}/>}
                /> 
                <InvestmentList currentInvestments={this.props.currentInvestments} cryptoPriceGet={this.props.cryptoPriceGet}/>
                <div>
                    <LittleBtcChart />
                    <LittleEthChart />
                    <LittleBchChart />
                    <LittleLtcChart />
                </div>
            </div>
        )
    }
}

export default withInvestments(Portfolio)

