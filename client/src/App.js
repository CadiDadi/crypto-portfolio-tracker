import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/PortfolioPage/Portfolio'
import ChartPage from './Components/ChartPage/ChartPage'
import MarketPage from './Components/MarketPage/MarketPage'

class App extends Component {
  render(){ 
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' render={props => <Portfolio {...props} /> }/>
          <Route path='/charts' render={props => <ChartPage {...props} /> }/>
          <Route path='/market' render={props => <MarketPage {...props} /> } />
        </Switch>
      </div>
    )
  }
}

export default App

//**** GITHUB - update ISSUES & PROJECT ****//

// TO DO
    //add Header / from crypto-events
    //inside switch
        //add an ABOUT component
        //shop page? see folder & files
// bugs
    //form entry - 
        //purchase price entry - doesnt clear after submit (all others do)
        //date - remove up/down inside box
        //capitalize, except am/pm
        //amount field - 8digits