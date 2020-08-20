import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * body of post
 * author
 * likes
 * comments
 * image
 * date
 */

const postSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  imageUrl: {
    type: String,
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  date: { type: Date, default: Date.now },
});

let Post = mongoose.model("Post", postSchema);

export default Post;
