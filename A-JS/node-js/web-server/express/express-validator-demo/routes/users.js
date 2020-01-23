var express = require('express');
var router = express.Router();
const { check, validationResult, sanitizeBody }  = require('express-validator')

/* GET users listing. */
router.get('/', [

  check('email').trim().isEmail().normalizeEmail(),
  check('password').isLength({min:4}).isAlphanumeric(),
  // check date in format'YYYY-MM-DD'
  check('date-of-birth').isISO8601(),
  check('int').isInt({min:7, max:120}),
  check('float').isFloat(),
  check('mobileNumType').isMobilePhone('de-DE'),
  check('isPostalCode').isPostalCode('DE'),
  check('creditCard').isCreditCard(),
  check('price').isCurrency({symbol:'$'}),
  check('ip').isIP(),
  check('url').isURL(),
  check('text').not().isEmpty().withMessage('value is required'), // is .not().isEmpty()  == // value is required

] ,function(req, res, next) {

  const errors = validationResult(req)
  if(!errors.isEmpty()){

    return res.status(422).json({errors: errors.array()})
  }else{

    res.status(200).json({response: req.body})
  }

});

module.exports = router;
