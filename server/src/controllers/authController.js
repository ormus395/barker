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

export const login = (req, res, next) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }).then((user) => {
    // if no user, 401, user wasnt found with that email
    if (!user) {
      let error = new Error("Unable to login. Incorrect login credentials.");
      error.statusCode = 401;
      throw error;
    }

    // user was found, check password
    bcrypt
      .compare(password, user.password)
      .then((isMatch) => {
        if (!isMatch) {
          let error = new Error(
            "Unable to login. Incorrect login credentials."
          );
          error.statusCode = 401;
          throw error;
        }

        req.session.isLoggedIn = true;
        req.session.user = {
          _id: user._id,
        };

        res.status(200).json({ message: "Logged in successfully" });
      })
      .catch((error) => {
        throw error;
      });
  });
};

export const logout = (req, res, next) => {
  req.session.destroy((error) => {
    if (error) {
      next(error);
    }
    res.json({ message: "logged out successfully" });
  });
};
