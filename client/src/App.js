import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/PortfolioPage/Portfolio'
import ChartPage from './Components/ChartPage/ChartPage'

class App extends Component {
  render(){ 
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' render={props => <Portfolio {...props} /> }/>
          <Route path='/charts' render={props => <ChartPage {...props} /> }/>
        </Switch>
      </div>
    )
  }
}

export default App


// TO DO
    //add Header from crypto-events
    //inside switch
        //add an ABOUT component
        //shop page? see folder & files
// bugs
    //purchase price entry form box doesnt clear after submit (all others do)
