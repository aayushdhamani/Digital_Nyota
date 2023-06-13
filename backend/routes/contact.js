const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/",
  [
    body("name", "please enter a valid name").isLength({ min: 5 }),
    body("mobile_no", "Mobile must be of 10 digits").isLength({ min: 10 }),
    // body("email", "enter the valid email").isEmail()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors:errors.array()});
    }
User.create({
    name:req.body.name,
    mobile_no:req.body.mobile_no,
    Email_address:req.body.Email_address,
    invitation_type:req.body.invitation_type,
    comments:req.body.comments

}).then((user)=>{
    res.json(user)
    console.log(user);
});
    
  }
);  
module.exports = router ;