const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const { getTeams, addTeams, updateTeam, getTeam, deleteTeam} = require('../controllers/teams')
const {validateFields} = require("../middlewares/validate-fields");

router 
.route('/')
.get(getTeams)
.post([
    check('idPlayer','Id is numeric').isNumeric(),
    check('numPlayers','The number of players must be between 11 and 25').isInt({min:11, max:25}),
    check('numPlayers', 'NumPlayers is required').not().isEmpty(),
    check('numPlayers','The number of players is numeric').isNumeric(),
    check('league', 'The league is required').not().isEmpty(),
    check('league').isIn(['League One','Liga Hypermotion','Premier League','Bundesliga']),
    check('league','League is a string').isString(),
    validateFields
],addTeams)

router
.route('/:id')
.get(getTeam)
.put(updateTeam)
.delete(deleteTeam)

module.exports = router;