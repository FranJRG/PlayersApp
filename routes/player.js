const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const { getPlayers, addPlayer} = require('../controllers/players')
const {validateFields} = require("../middlewares/validate-fields");
const {nameExist} = require('../helpers/db-validators');

router 
.route('/')
.get(getPlayers)
.post([
    check('name','Name is required').not().isEmpty(),
    check('team','Name is required').not().isEmpty(),
    check('team','Team is required to recognized the player').not().isEmpty(),
    check('age', 'Age must be a number').isNumeric(),
    check('name').custom(nameExist),
    validateFields
],addPlayer)

module.exports = router;