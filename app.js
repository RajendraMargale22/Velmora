if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}
// console.log(process.env);

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const flash = require("connect-flash");
const passport = require("passport");   
const LocalStrategy = require("passport-local");
  

const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");

//Import Models from Models Folder
const Listing = require("./models/listing");  // import Listing Model from listing.js
const Review = require("./models/review.js");  // import Review Model from review.js
const User = require("./models/user.js");   // import User Model from review.js

//Import Middleware Functions from Middleware.js
const {isLoggedIn, isOwner, validateListing, currUser} = require("./middleware.js");

//Import Express Routers from Routes Folder
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");


// ================= Important CODES =================

const app = express();
const PORT = 8080;

const DB_URL = process.env.ATLASDB_URL;


const store = MongoStore.create({
    mongoUrl: DB_URL,
    crypto: {
        secret: process.env.SECRET, 
    },
    touchAfter: 24 * 3600,
});

store.on("error", (err) => {
    console.log("ERROR in MONGO STORE", err);
});

const sessionOptions = {
    store: store,
    secret:process.env.SECRET,
    resave : false,
    saveUninitialized: true,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
    }
};

// ================= Middleware FIRST =================

// set view engine as ejs and looks for ejs files in views folder
app.set("views" , path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// breaks/parse the data for req.params
app.use(express.urlencoded({extended:true}));

app.use(methodOverride("_method"));  // used to override/ convert post into other routes using [?_method="....."]

app.engine('ejs', ejsMate);  // used to set includes and partials


// ================= DATABASE CONNECTION =================

async function main() {
    await mongoose.connect(DB_URL);
}
main().then( () => {
    console.log("Connected to DataBase");
}).catch((err) => {
    console.log(err);
});


// ================= Middleware SECOND =================

//SESSION : Session cookies and flash card calling here as middleware

app.use(session(sessionOptions));  // Use express session
app.use(flash());

// Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Locals middleware : Middlewares to parse locals in all ejs files 
// Middleware to call or use flash card and current user
app.use((req, res, next) => {
    // we create locals to access the req parameters inside ejs files as it directly doesn't support it 
    // Below are the locals we use in ejs templates
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();  // its important to call else will stuck here 
});



// ================= ROUTES =================

//Home Route
app.get("/", async (req, res) => {
    // res.send("working");
    // let listings = await Listing.aggregate([{ $sample: { size: 6 } }]);
    let listings = await Listing.find({}).limit(6);  // fetch from DB
    res.render("home", { listings });  // pass to EJS
});


//EXPRESS ROUTERS : Middlewares for Routes
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);


// DEMO USER
// app.get("/demouser", async (req, res) => {
//     let fakeUser = new User({
//         email : "student@gmail.com",
//         username : "stud1",
//     });

//     let registeredUser = await User.register(fakeUser, "helloworld");
//     res.send(registeredUser)
// })


// ================= ERROR HANDLING =================

//Error Handling
app.use((req, res, next) => {
next(new ExpressError(404, "Page not Found"));
});

app.use((err, req, res, next) => {
    let {statusCode=500, message="Something went Wrong"} = err;
    res.status(statusCode).render("error.ejs", {message})
    // res.status(statusCode).send(message);
});


// ================= PORT =================

app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}`);
});
