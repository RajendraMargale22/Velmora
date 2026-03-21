const express = require("express");
const router = express.Router();

const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");


router.route("/signup")
.get( userController.renderSignupForm )    // Render SignUp Form Route
.post( wrapAsync(userController.signup));  // SignUp Route

router.route("/login")
.get( userController.renderLoginForm)  // Render LogIn Form Route
.post( saveRedirectUrl, passport.authenticate('local', {failureRedirect : '/login', failureFlash: true}),userController.login);    //LogIn Route

//LogOut Route
router.get("/logout", userController.logout);


module.exports = router;