import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";

import database from "./models";
import User from "./models/user";
import Post from "./models/post";

import routes from "./routes";

const app = express();

app.use(bodyParser.json());

app.use(cors());

// routes
app.use("/session", routes.session);
app.use("/user", routes.user);
app.use("/blog", routes.blog);

// 404 response
app.use((req, res, next) => {
  res.status(404).json({ message: "The resource does not exist" });
});

// error handling

//create database associations
Post.belongsTo(User, { onDelete: "CASCADE" });
User.hasMany(Post);

database.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("server started on port: " + process.env.PORT);
  });
});
