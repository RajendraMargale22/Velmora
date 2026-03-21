const Listing = require("../models/listing.js");  // import Listing Model from Models/listing.js
const Review = require("../models/review.js"); 
const User = require("../models/user.js");


//Renders SignUp form to user
module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup")
};

// Sign Up the user by storing its credentials
module.exports.signup = async (req, res, next) => {
    try{
        let {email, username, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        // console.log(newUser);
        // console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if(err){
                return next(err);
            };
            req.flash("success", "New User Registered");
            res.redirect("/"); // redirect new user to home page
        });
    }catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    };
};

//Renders logIn form to user
module.exports.renderLoginForm = (req, res) => {
    res.render("users/login")
};

//LogIn the User
module.exports.login = async (req, res) => {
    req.flash("success","Welcome! , You're logged in");
    let redirectUrl = res.locals.redirectUrl || "/";
    res.redirect(redirectUrl);
};

//LogOuts the User
module.exports.logout = (req, res, next) => {
    req.logout( (err) => {
        if(err){
            return next(err);
        }
        req.flash("success", "You are Logged Out!");
        res.redirect("/");
    });
};