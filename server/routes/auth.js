const express = require('express')
const router = express.Router()
const { signup, login } = require('../controllers/authcontroller')

//signup
router.post('/signup',signup)
//login
router.post('/login', login)

module.exports = router