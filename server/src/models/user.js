import mongoose from "mongoose";
import bcrypt from "bcrypt";
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
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

userSchema.pre("save", function (next) {
  if (this.password) {
    bcrypt
      .hash(this.password, 12)
      .then((hash) => {
        this.password = hash;

        return next();
      })
      .catch((err) => {
        next(err);
      });
  }
});

const User = mongoose.model("User", userSchema);

export default User;
