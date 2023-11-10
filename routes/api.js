const express = require('express')
const foodController = require('../controller/foodController')

const router = express.Router()

router.get('/foodItems', foodController.foodItems)

router.get('/foodItems/:id', foodController.getFoodItemById);

module.exports= router;