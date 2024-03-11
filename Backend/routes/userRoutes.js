const express = require('express');

//controller functions
const { loginUser, singupUser } = require('../controllers/userController')
const router = express.Router();

//login Route
router.post('/login', loginUser);

//signup Route
router.post('/signup', singupUser)

module.exports = router;
