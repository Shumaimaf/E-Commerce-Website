const express = require('express')
const router = express.Router()

const { demoMail, orderPlace, allOrders, deleteOrder, getAnOrder , orderItems} = require('./controller')

router.post('/create-order', demoMail)
router.post('/order-mail', orderPlace)
router.get('/getallorders', allOrders)
router.delete('/delete-order/:_id', deleteOrder)
router.get('/get-order/:_id', getAnOrder)
router.get('/getorderitems/:_id', orderItems)



module.exports = router;