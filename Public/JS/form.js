const express = require('express');
const app = express();

app.use(express.json());



const { check, validationResult } = require('express-validator/check');

app.post('/user', [
  // username must be an email
  check('username').isEmail(),
  // password must be at least 5 chars long
  check('password').isLength({ min: 5 }),
 
  req.checkBody('preference', "preference is a required field").notEmpty(),
  req.checkBody('firstName', "firstName is a required field").notEmpty(),
  req.checkBody('lastName', "lastName is a required field").notEmpty(),
  req.checkBody('email', "email is a required field").notEmpty(),
  req.checkBody('password', "password is a required field").notEmpty(),
  req.checkBody('size', "size is a required field").notEmpty(),
], (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  User.create({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    preference: req.body.preference,
    size: req.body.size,
    websites: req.body.websites
  }).then(user => res.json(user));
});



$(function () {
    $(".change-eaten").on("click", function (event) {
  
      event.preventDefault();
      console.log('Burger Eaten');
      var id = $(this).data("id");
     console.log(this);
      var newState = {
        devoured: true,
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function () {
          location.reload();
          
        }
      );
    });
  });
  
  
  $ (function () {
    $(".button").on("click", function (event) {
      console.log('CLICKED!!!!!!');
      event.preventDefault();
  
      var newBurger = {
        name: $("#new-burger").val().trim(),
        devoured: false
      };
  console.log(newBurger);
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newUser
      }).then(
        function () {
          console.log("created new burger");
    
          location.reload();
        
        }
      );
    });
  });