const express = require('express')

// controller functions
const { signupUser, loginUser } = require('../controllers/userController')

const router = express.Router()

// signup user
router.post('/signup', signupUser)

// login user
router.post('/login', loginUser)

module.exports = router;