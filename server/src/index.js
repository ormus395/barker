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
app.use("/api", routes.auth);
app.use("/api", routes.blog);

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

  return res.status(error.statusCode).json({ error: error });
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