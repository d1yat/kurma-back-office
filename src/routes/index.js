const express = require('express')
const router = express.Router()
const product = require('./product.js')
const student = require('./student.js')

router.use([
    product, 
    student
])

module.exports = router
