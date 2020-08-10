import bcrypt from "bcrypt";

import User from "../models/user";

const salt = 12;

export const signup = (req, res, next) => {
  // get request body
  let email = req.body.email;
  let name = req.body.name;
  let password = req.body.password;

  // find if user exists
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        let error = new Error("A user with this email already exists");
        error.statusCode = 401;
        throw error;
      }

      bcrypt.hash(password, salt).then((hash) => {
        let newUser = new User({
          email: email,
          name: name,
          password: hash,
        });

        return newUser.save();
      });
    })
    .then((user) => {
      res.status(201).json({
        message: "User created successfully",
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }

      next(err);
    });
};

export const login = (req, res, next) => {};
