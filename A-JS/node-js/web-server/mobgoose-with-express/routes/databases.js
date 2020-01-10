const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.get('/',  async (req, res, next) => {
    const productID = req.params.product;
    const name = req.query.name;
console.log(name)
console.log(req)
    try{
        const products = await Product.find()
        res.status(200).send(products)
    }
    catch(e){
        next(e)
    }
})

// find ny ID
// 
// router.get('/:product',  async (req, res, next) => {

//     const productID = req.params.product;
//     const name = req.query.name;
//     const price = req.query.price;

//     console.log(name)
//     console.log(price)

//     const products = await Product.findById(productID)
//     res.status(200).send(products)
// })

// curl -d "name='iPhone Y'&price=1000.0" -X PUT http://localhost:3000/products/5e15bf6ce865442fc8748e2d
// http://10.10.0.225:3001/databases/5e15ab2fe70e0a42dc589b81?name=dfhgdf
router.put('/:product',  async (req, res, next) => {

    const productID = req.params.product;
    const name = req.query.name;
    const price = req.query.price;

    const products = await Product.findByIdAndUpdate(productID, {
        name: name,
        price: price
    })

    res.status(200).send(products)
})





module.exports = router