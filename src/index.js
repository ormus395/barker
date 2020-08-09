import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";

import routes from "./routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// routes
app.use("/user", routes.user);
app.use("/blog", routes.blog);

// 404 response
app.get("/not-found", (req, res, next) => {
  res.status(404).json({ message: "The resource does not exist" });
});

// error handling
app.get("*", (req, res, next) => {
  const error = new Error(`${req.ip} tried to access ${req.originalUrl}`);

  error.statusCode = 301;

  next(error);
});

app.use((error, req, res, next) => {
  if (!error.statusCode) error.statusCode = 500;

  if (error.statusCode === 301) {
    return res.status(301).redirect("/not-found");
  }

  return res.status(error.statusCode).json({ error: error.toString() });
});

// connect to db and start server
mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true })
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log("server started on port: " + process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
