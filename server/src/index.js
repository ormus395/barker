import path from "path";

import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";

import routes from "./routes";

const app = express();
let env = process.env.NODE_ENV || "development";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// routes
app.use("/api", routes.user);
app.use("/api", routes.blog);

// 404 response
app.get("/not-found", (req, res, next) => {
  res.status(404).json({ message: "The resource does not exist" });
});

if (env !== "development") {
  app.use(express.static(path.join(__dirname, "../", "../", "client")));
  app.get("/", (req, res, next) => {
    res.sendFile(
      path.join(__dirname, "../", "../", "client", "public", "index.html")
    );
  });
}

// error handling
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
