"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _marked = _interopRequireDefault(require("marked"));

var _dompurify = _interopRequireDefault(require("dompurify"));

var _jsdom = require("jsdom");

var _slugify = _interopRequireDefault(require("slugify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var window = new _jsdom.JSDOM("").window;
var DOMPurify = (0, _dompurify["default"])(window);
var Schema = _mongoose["default"].Schema;
var blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  markdown: {
    type: String,
    required: true
  },
  processedHtml: {
    type: String,
    required: true
  },
  // author: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  likes: {
    type: Number,
    "default": 0
  },
  date: {
    type: Date,
    "default": Date.now
  }
});
blogSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = (0, _slugify["default"])(this.title);
  }

  if (this.markdown) {
    this.processedHtml = DOMPurify.sanitize((0, _marked["default"])(this.markdown));
  }

  next();
});

var Blog = _mongoose["default"].model("Blog", blogSchema);

var _default = Blog;
exports["default"] = _default;