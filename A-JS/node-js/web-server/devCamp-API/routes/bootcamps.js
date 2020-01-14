const express = require('express')
const router = express.Router();


router
.route('/')
.get(require('../controllers/bootcamps').getBootcamps)
.post(require('../controllers/bootcamps').postBootcamps)


router
.route('/:id')
.get(require('../controllers/bootcamps').getBootcampById)
.put(require('../controllers/bootcamps').putBootcampById)
.delete(require('../controllers/bootcamps').deletetBootcampById)


module.exports = router