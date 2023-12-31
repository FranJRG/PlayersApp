const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const { getPlayers, addPlayer, getPlayer, updatePlayer, deletePlayer} = require('../controllers/players')
const {validateFields} = require("../middlewares/validate-fields");
const {nameExist, nameExistUpdate} = require('../helpers/db-validators');

router 
.route('/')
.get(getPlayers)
.post([
    check('name','Name is required').not().isEmpty(),
    check('team','Team is required to recognized the player').not().isEmpty(),
    check('age', 'Age must be a number').isNumeric(),
    check('name').custom(nameExist),
    validateFields
],addPlayer)

router
.route('/:id')
.get([
    check("id","Id not valid").isMongoId(),
    validateFields
],getPlayer)
.put([
    check('name').custom(nameExistUpdate),
    check("id","Id not valid").isMongoId(),
    validateFields
],updatePlayer)
.delete([
    check("id","Id not valid").isMongoId(),
    validateFields
],deletePlayer)

module.exports = router;