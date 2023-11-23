const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const { getAgents, addAgent} = require('../controllers/agents')
const {validateFields} = require("../middlewares/validate-fields");

router 
.route('/')
.get(getAgents)
.post([
    check('name','Name is required').not().isEmpty(),
    check('email','email is required').not().isEmpty(),
    check('idPlayer','idPlayer is required to recognized the player').not().isEmpty(),
    check('idPlayer', 'idPlayer must be a number').isNumeric(),
    validateFields
],addAgent)

module.exports = router;