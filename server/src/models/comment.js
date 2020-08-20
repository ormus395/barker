import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  body: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
});

let Comment = mongoose.model("Comment", commentSchema);

export default Comment;
