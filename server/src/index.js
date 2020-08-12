import path from "path";

import "dotenv/config";
import bodyParser from "body-parser";
import session from "express-session";
const mongoStore = require("connect-mongodb-session")(session);
import csurf from "csurf";
import express from "express";
import mongoose from "mongoose";

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

const store = new mongoStore({
  uri: process.env.DATABASE,
  collection: "sessions",
  databaseName: "code_blog",
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
app.use(csrfProtection);

// routes
app.use("/api", routes.auth);
app.use("/api", routes.blog);
app.use("/admin", routes.admin);
app.use("/", (req, res, next) => {
  res.send(req.csrfToken());
});
if (env !== "development") {
  app.use(express.static(path.join(__dirname, "../", "../", "client")));
  app.get("/", (req, res, next) => {
    res.sendFile(
      path.join(__dirname, "../", "../", "client", "public", "index.html")
    );
  });
}

app.use((req, res) => {
  res.json({ message: "404 Not found" });
});

// error handling
app.use((error, req, res, next) => {
  console.log(error);
  if (!error.statusCode) {
    error.statusCode = 500;
    error.message =
      "Server error. Our team has been notified and will be working to fix the situation.";
  }

  return res.status(error.statusCode).json({ message: error.message });
});

// connect to db and start server
mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true })
  .then((result) => {
    app.listen(port, () => {
      console.log("server started on port: " + port);
    });
  })
  .catch((err) => console.log(err));
