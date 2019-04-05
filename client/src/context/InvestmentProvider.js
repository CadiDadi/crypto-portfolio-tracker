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
        console.log(newInvestment)
        axios.post('/portfolio', newInvestment).then(response => {
            console.log(response)
            this.setState(prevState => ({
                currentInvestments: [...prevState.currentInvestments, response.data]
            }))
        })
        .catch(err => console.log(err))
    }

    handleDeleteRouter = (id) => {
        console.log(id)
        axios.delete(`/portfolio/${id}`).then(res =>
            this.setState({
                currentInvestments: this.state.currentInvestments.filter(each => each._id !== id)
            })
        )
    }

    // handleEditRouter = (id) => {
    //     axios.put(`/portfolio/${id}`).then(res => 
    //         this.setState({
    //             currentInvestments: this.state.currentInvestments.map(each => each._id)
    //         })
    //     )
    // }

    render(){
        return(
            <InvestmentContext.Provider
                value={{
                    currentInvestments: this.state.currentInvestments,
                    cryptoPriceGet: this.state.cryptoPriceGet,
                    getInvestments: this.getInvestments,
                    addInvestment: this.addInvestment,
                    handleDeleteRouter: this.handleDeleteRouter,
                    handleEditRouter: this.handleEditRouter
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