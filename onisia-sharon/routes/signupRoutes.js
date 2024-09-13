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
        res.redirect('/');
    } catch (error) {
        res.status(404).send("unable to save user to db");
        console.log("Error saving user", error);
    }
})

// router.post("/signup", async (req, res) => {
//     try {
//       const existingUser = await Signup.findOne({ email: req.body.email });
//       if (existingUser) {
//         return res.status(400).send("A user with this email already exists!");
//       }
  
//       const user = new Signup({
//         fullName: req.body.fullName,
//         gender: req.body.gender,
//         dob: req.body.dob,
//         nationality: req.body.nationality,
//         phoneNumber: req.body.phoneNumber,
//         email: req.body.email,
//         poBox: req.body.poBox,
//         emergencyPhoneNumber: req.body.emergencyPhoneNumber,
//         passportNumber: req.body.passportNumber,
//         visaDocument: req.body.visaDocument,
//         departureCity: req.body.departureCity,
//         destinationCity: req.body.destinationCity,
//       });
//     } catch (err) {
//       console.error("Signup user error:", err);
//       res.status(400).render("register", { title: "Signup" });
//     }
//   });
   
module.exports = router;