const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const { getUsers, updateUser, getUser, addUser, deleteActive } = require("../controllers/users");
const { emailExist, loginExist, loginUserExistUpdate, emailExistUpdate } = require("../helpers/db-validators");
const { validateFields } = require("../middlewares/validate-fields");

router
.route('/')
.get(getUsers)
.post([
    check('email','Email is required').not().isEmpty(),
    check('login','Login is required').not().isEmpty(),
    check('name','Name is required').not().isEmpty(),
    check('role','Role is required').not().isEmpty(),
    //check('password',"Password weak").matches("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8}$/"),
    check('password','Password is required').not().isEmpty(),
    check('email').isEmail(),
    check('email').custom(emailExist),
    check('login').custom(loginExist),
    validateFields
],addUser)

router
.route('users/:id')
.get([
    check('id','Id not valid').isMongoId(),
    validateFields
],getUser)
.put([
    check('login').custom(loginUserExistUpdate),
    check('email').custom(emailExistUpdate),
    check('id','Id not valid').isMongoId(),
    validateFields
],updateUser)
.delete([
    check('id',"Id not valid").isMongoId(),
    validateFields
],deleteActive)

module.exports=router;