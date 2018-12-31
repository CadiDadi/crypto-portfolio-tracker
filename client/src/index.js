import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
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

