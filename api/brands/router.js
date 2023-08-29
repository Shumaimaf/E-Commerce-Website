const express = require('express')
const router = express.Router()

const { AddBrand, BrandByID, getAllBrands, BrandByName, updateBrand, deleteBrand} = require('./controller')

router.get('/getallbrands', getAllBrands)
router.post('/addbrand', AddBrand)
router.get('/brandbyid/:_id', BrandByID)
router.get('/brandbyname/:BrandName', BrandByName)
router.put('/update-brand/:_id', updateBrand)
router.delete('/delete-brand/:_id', deleteBrand)

module.exports = router;