const passport = require("passport");
const { register, login, logout } = require("../controller/AuthController");
const router = require("express").Router()

//routes 
router.post("/register", register)
router.post("/login", login);
router.post("/logout", logout);

// passport 
router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:3000/');
    });




module.exports = router;