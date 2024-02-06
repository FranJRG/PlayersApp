const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const { validateFields } = require("../middlewares/validate-fields");
const { loginUser } = require("../controllers/auth");

router
.route('/login')
.post([
    check('login','Login is required').not().isEmpty(),
    check('password','Password is required').not().isEmpty(),
    validateFields
],loginUser)

module.exports = router;