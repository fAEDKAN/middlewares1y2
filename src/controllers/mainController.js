const {validationResult} = require('express-validator');



module.exports = {

    index: (req,res) => {
        return res.render('index')
    },

    contact: (req,res) => {
        return res.render('contact')
    },

    services: (req,res) => {
        return res.render('services')
    },

    about: (req,res) => {
        return res.render('about')
    },

    admin: (req,res) => {
        return res.render('admin', {
            user : req.query.user
        })
    },

    login: (req,res) => {
        return res.render('login', {
            msg : req.query.error ? 'No tienes los privilegios para ingresar' : null
        })
    },

    register: (req,res) => {
        return res.render('register')
    },

    processRegister: (req,res) => {
        const errors = validationResult(req);

        if(errors.isEmpty()) {
            return res.send('Todo joya, pasa nomás...');
        }else{
            return res.render('register', {
                errors : errors.mapped(),
                old : req.body
            })
        }
    }
}