import mongoose from "mongoose";
const Schema = mongoose.Schema;

/**
 * name
 * email
 * password
 * posts
 * avatar url
 */
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatarUrl: {
    type: String,
  },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

const User = mongoose.model("User", userSchema);

export default User;
