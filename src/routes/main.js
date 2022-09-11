const router = require('express').Router();

const {index, contact, about, services, admin, login, register, processRegister} = require('../controllers/mainController')

const adminCheck = require('../middlewares/adminCheck');

const registerValidator = require('../validations/registerValidator');



router
    .get('/', index)
    .get('/contact', contact)
    .get('/about', about)
    .get('/services', services)
    .get('/admin', adminCheck, admin)
    .get('/login', login)
    .get('/register', register)
    .post('/register', registerValidator, processRegister)
    
module.exports = router;