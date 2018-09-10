const express = require('express');
const app = express();

app.use(express.json());



const { check, validationResult } = require('express-validator/check');

app.post('/user', [
  // username must be an email
  check('username').isEmail(),
  // password must be at least 5 chars long
  check('password').isLength({ min: 5 }),
 
  req.checkBody('type', "preference is a required field").notEmpty(),
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
    type: req.body.type,
    size: req.body.size,

  }).then(user => console.log(user));
});


