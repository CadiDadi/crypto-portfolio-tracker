import React, { Component } from 'react'
import { withInvestments } from '../../../context/InvestmentProvider'
import './portfolio.css'
import Form from '../../../shared/Form'
import AddInvestmentForm from '../AddInvestmentForm/AddInvestmentForm'
import InvestmentList from '../InvestmentList/InvestmentList'
import LittleBtcChart from '../LittleCharts/LittleBtcChart'
// import { toUnicode } from 'punycode';

class Portfolio extends Component {
    componentDidMount(){
        this.props.getInvestments()
    }

    render(){
        console.log(this.props.investments)
        console.log(this.props.tickerGet)
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
                <InvestmentList currentInvestments={this.props.currentInvestments} tickerGet={this.props.tickerGet}/>

                <LittleBtcChart />

            </div>
        )
    }
}

export default withInvestments(Portfolio)

// todo
    //not listing current investments
    //css?