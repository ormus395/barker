"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteBlog = exports.getBlog = exports.getHomeFeed = exports.postBlog = void 0;

var _blog = _interopRequireDefault(require("../models/blog"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getHomeFeed = function getHomeFeed(req, res) {
  return res.send("Get blog home feed");
};

exports.getHomeFeed = getHomeFeed;

var getBlog = function getBlog(req, res) {
  // get blog by id
  var slug = req.params.slug;

  _blog["default"].findOne({
    slug: slug
  }).then(function (blog) {
    // if no blog, create and throw 404 error
    if (!blog) {
      var error = new Error("That blog does not exist");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: "Fetched blog successfully.",
      blog: blog
    });
  });
};

exports.getBlog = getBlog;

var postBlog = function postBlog(req, res) {
  var title = req.body.title;
  var markdown = req.body.markdown;
  var author;
  var blog = new _blog["default"]({
    title: title,
    markdown: markdown,
    author: req.userId
  });
  blog.save().then(function (result) {
    res.status(201).json({
      message: "Blog created successfully",
      blog: result
    });
  })
  /*
  .then((user) => {
  author = user;
  user.posts.push(blog);
  return user.save();
  })
  .then((user) => {
  res.status(201).json({
   message: "Post created successfully",
   blog: blog,
   author: { _id: author._id, name: author.name },
  });
  })*/
  ["catch"](function (err) {
    throw new Error(err);
  });
};

exports.postBlog = postBlog;

var updateBlog = function updateBlog(req, res, next) {
  res.send("update blog with id: " + req.params.blogId);
};

var deleteBlog = function deleteBlog(req, res) {
  res.send("delete the blog with id: " + req.params.blogId);
};

exports.deleteBlog = deleteBlog;