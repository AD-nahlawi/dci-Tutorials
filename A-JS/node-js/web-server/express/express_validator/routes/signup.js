const express = require("express");
//const session = require("express-session");
const { check, validationResult }  = require('express-validator')
const router = express.Router()

router.post('/create-user', [
    check('name').not().isEmpty().withMessage('Name is required'), 
    check('email', 'Email is required').isEmail(), 
    check('password', 'Password is Required').isLength({min : 1}).custom((val, {req, loc, path}) =>{
        if(val !== req.body.confirm_password){
            throw new Error('password do not match')
        }else{
            return val
        }
    }) 
],(req, res) =>{
    var errors = validationResult(req)
    if(!errors.isEmpty()){
        req.session.errors = errors
        req.session.success = false
        res.redirect('/signup')
    }
        req.session.success = true
        res.redirect('/')

    
} )

router.get('/', (req, res) => {
    res.render('signup', {
        success:req.session.success,
        errors: req.session.errors
    })
    req.session.errors = null
})


module.exports = router