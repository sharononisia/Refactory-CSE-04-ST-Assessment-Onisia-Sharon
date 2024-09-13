const express = require('express');
const router = express.Router();

// import model
const Signup = require('../models/signup');

router.get('/signup',  (req, res) => {
    res.render('register', { title: "Signup" });
})

router.post('/signup', async (req, res) => {
    try {
        const newSignup = new Signup(req.body);
        await newSignup.save();
        // res.redirect('/list');
    } catch (error) {
        res.status(404).send("unable to save user to db");
        console.log("Error saving user", error);
    }
})


      
module.exports = router;