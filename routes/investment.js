const express = require('express')
const investmentRouter = express.Router()
const Investment = require('../models/investment')
const axios = require('axios') 

//get all
investmentRouter.get('/', (req, res, next) => {
    Investment.find(async (err, investments) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        
        const cryptoPrices = Array.from(new Set(investments.map(investment => investment.symbol))).join(',')
        
        const cryptoPriceGet = await axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptoPrices}&tsyms=USD&api_key=85902babd490353363f521ff093d32bdc35fed2f3d9c30d77158e7bb3eff335e`)

        return res.status(200).send({investments, cryptoPriceGet: cryptoPriceGet.data})
    })
})

//get one
investmentRouter.get('/:id', (req, res, next) => {
    Investment.findOne({_id: req.params.id}, (err, investment) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(investment)
    })
})

//post one
investmentRouter.post('/', (req, res, next) => {
    const newInvestment = new Investment(req.body)
    newInvestment.save((err, investment) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(investment)
    })
})

//update one
investmentRouter.put('/:id', (req, res, next) => {
    Investment.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    {new: true},
    (err, updatedInvestment) => {
        if(err) {
            return next(err)
        }
        return res.status(201).send(updatedInvestment)
    })
})

//delete one
investmentRouter.delete('/:id', (req, res, next) => {
    Investment.findOneAndDelete({_id: req.params.id}, (err, deletedInvestment) => 
    {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(`${deletedInvestment.name} was successfully deleted.`)
    })
})

module.exports = investmentRouter