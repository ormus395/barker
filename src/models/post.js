import { Sequelize, DataTypes } from "sequelize";
import database from "./index";

const Post = database.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
  },
});

export default Post;
