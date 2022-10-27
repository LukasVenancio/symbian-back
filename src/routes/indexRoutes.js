'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) =>{
    res.status(200).send({
       title: "Symbian Back",
       version: "0.1"
    })
})

module.exports = router