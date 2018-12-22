import React, { Component } from 'react'
import axios from 'axios'

const InvestmentContext = React.createContext()

class InvestmentProvider extends Component {
    constructor() {
        super()
        this.state = {
            currentInvestments: [],
            cryptoPriceGet: []
        }
    }

    getInvestments = () => {
        axios.get('/portfolio').then(response => {
            console.log(response)
            this.setState({
                currentInvestments: response.data.investments,
                cryptoPriceGet: response.data.cryptoPriceGet
            })
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    addInvestment = newInvestment => {
        axios.post('/portfolio', newInvestment).then(response => {
            this.setState(prevState => ({
                currentInvestments: [...prevState.currentInvestments, response.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
    render(){
        return(
            <InvestmentContext.Provider
                value={{
                    currentInvestments: this.state.currentInvestments,
                    cryptoPriceGet: this.state.cryptoPriceGet,
                    getInvestments: this.getInvestments,
                    addInvestment: this.addInvestment
                }}>
                { this.props.children }
            </InvestmentContext.Provider>
        )
    }
}

export default InvestmentProvider

export const withInvestments = C => props => (
    <InvestmentContext.Consumer>
        {value => <C {...props} {...value} />}
    </InvestmentContext.Consumer>
)


