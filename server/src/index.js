import path, { join } from "path";

import "dotenv/config";
import bodyParser from "body-parser";
import session from "express-session";
import multer from "multer";
const mongoStore = require("connect-mongodb-session")(session);
import csurf from "csurf";
import express from "express";
import mongoose from "mongoose";

import User from "./models/user";
import Post from "./models/post";

// seed method
import createUserWithPost from "../seed/index";

import routes from "./routes";

const app = express();
let env = process.env.NODE_ENV || "development";
let secure = process.env.NODE_ENV ? true : false;
let port = process.env.PORT || 8080;
const csrfProtection = csurf();
// if (env === "development") {
//   import cors from "cors";
//   app.use(cors());
// }

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
app.use(multer({ storage: fileStorage }).single("image"));
let imagePath = path.join(__dirname, "../", "../", "images");
app.use("/images", express.static(imagePath));

const store = new mongoStore({
  uri: process.env.DATABASE,
  collection: "sessions",
  databaseName: "barker",
  expires: 1000 * 60 * 60 * 2,
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 7200000,
      secure: secure,
    },
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
// app.use(csrfProtection);

// routes
// create users, set sessions, destroy sessions
app.use("/api", routes.auth);
// curates post feed
app.use("/api", routes.feed);
// handles post resources, create update and delete
app.use("/api", routes.post);
// will eventually handle admin tasks, like deleting users ect...
app.use("/admin", routes.admin);

// get the csrf token
// app.get("/", (req, res, next) => {
//   console.log(req.csrfToken());
//   res.send(req.csrfToken());
// });

// when deployed to production, will set the front end to react app
if (env !== "development") {
  app.use(express.static(path.join(__dirname, "../", "../", "client")));
  app.get("/", (req, res, next) => {
    res.sendFile(
      path.join(__dirname, "../", "../", "client", "public", "index.html")
    );
  });
}

// 404
app.use((req, res) => {
  res.status(404).json({ message: "404 Not found" });
});

// error handling
app.use((error, req, res, next) => {
  console.log(error);
  if (!error.statusCode) {
    error.statusCode = 500;
    error.message =
      "Server error. Our team has been notified and will be working to fix the situation.";
  }

  return res.status(error.statusCode).json({
    errors: [error],
  });
});

// connect to db and start server
mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true })
  .then((result) => {
    Promise.all([User.deleteMany({}), Post.deleteMany({})]).then((result) => {
      createUserWithPost()
        .then((reponse) => {
          app.listen(port, () => {
            console.log("server started on port: " + port);
          });
        })
        .catch((err) => console.log(err));
    });
  })
  .catch((err) => console.log(err));
