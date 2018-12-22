import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import InvestmentProvider from './context/InvestmentProvider'

ReactDOM.render(
    <BrowserRouter>
        <InvestmentProvider>
            <App />
        </InvestmentProvider>
    </BrowserRouter>, 
document.getElementById('root'))

