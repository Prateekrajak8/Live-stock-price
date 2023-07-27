const express = require('express');
const router = express.Router();
const signUpController = require ('../controller/signUp.controller')
router.route('/sign-up').post(signUpController.addUser)
module.exports = router