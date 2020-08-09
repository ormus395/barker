import mongoose from "mongoose";
import marked from "marked";
import createDomPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const DOMPurify = createDomPurify(window);

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  markdown: {
    type: String,
    required: true,
  },
  processedHtml: {
    type: String,
    required: true,
  },
  // author: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  likes: {
    type: Number,
    default: 0,
  },
  date: { type: Date, default: Date.now },
});

blogSchema.pre("validate", function (next) {
  if (this.markdown) {
    this.processedHtml = DOMPurify.sanitize(marked(this.markdown));
  }

  next();
});

let Blog = mongoose.model("Blog", blogSchema);

export default Blog;
