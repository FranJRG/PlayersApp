const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const { getUsers, updateUser, getUser, addUser, deleteActive, loginUser } = require("../controllers/users");
const { emailExist, loginExist, loginUserExistUpdate, emailExistUpdate } = require("../helpers/db-validators");
const {hasRole} = require("../middlewares/validate-roles");
const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-jwt");
const { isAdmin } = require("../middlewares/validate-role");

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
.route('/:id')
.get([
    hasRole("USER_ADMIN","USER_ROLE"),
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
    validateJWT,
    isAdmin
],deleteActive)

module.exports=router;