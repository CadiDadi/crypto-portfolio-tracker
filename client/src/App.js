import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css' 
import 'mdbreact/dist/css/mdb.css'

import './App.css' 
import Header from './Components/Header/Header'
import Portfolio from './Components/Portfolio/PortfolioPage/Portfolio'
import ChartPage from './Components/ChartPage/ChartPage'
import MarketPage from './Components/MarketPage/MarketPage'
import NewsPage from './Components/NewsPage/NewsPage'
import Footer from './Components/Footer/Footer'

class App extends Component {
  render(){ 
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={props => <Portfolio {...props}/> }/>
          <Route path='/charts' render={props => <ChartPage {...props}/> }/>
          <Route path='/market' render={props => <MarketPage {...props}/> }/>
          <Route path='/news'   render={props => <NewsPage {...props}/> }/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
