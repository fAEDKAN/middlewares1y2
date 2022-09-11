const {check} = require('express-validator');

module.exports = [

    check('firstName')
    .notEmpty().withMessage('El nombre es obligatorio').bail()
    .isLength({
        min : 3
    }).withMessage('Mínimo 3 caracteres').bail()
    .isAlpha('es-ES').withMessage('Sólo caracteres alfabéticos'),
    
    check('lastName')
        .notEmpty().withMessage('El apellido es obligatorio').bail()
        .isLength({
            min : 3
        }).withMessage('Mínimo 3 caracteres').bail()
        .isAlpha('es-ES').withMessage('Sólo caracteres alfabéticos'),
    
    check('email')
    .notEmpty().withMessage('El email es obligatorio').bail()
    .isEmail().withMessage('Debe ser un email válido').bail(),

    check('password')
    .notEmpty().withMessage('La contraseña es obligatoria').bail()
    .isLength({
        min : 8,
        max : 12
    }).withMessage('La contraseña debe tener entre 8 y 20 caracteres'),
]