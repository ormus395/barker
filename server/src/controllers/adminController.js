import { validationResult } from "express-validator";

import Blog from "../models/blog";
import User from "../models/user";

const postBlog = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  let userId = req.session.user._id;
  let blog;

  const { title, markdown } = req.body;
  const image = req.file;
  const imageUrl = "/" + image.path;

  const newBlog = new Blog({
    title,
    markdown,
    author: userId,
    imageUrl: imageUrl,
  });
  newBlog
    .save()
    .then((createdBlog) => {
      blog = createdBlog;
      return User.findById(userId);
    })
    .then((user) => {
      user.blogs.push(blog);
      return user.save();
    })
    .then((user) => {
      res.status(201).json({
        message: "Blog post created successfully",
        blog: blog,
      });
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const updateBlog = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  // get blog by id
  const _id = req.params.blogId;

  let title = req.body.title;
  let markdown = req.body.markdown;

  Blog.findById(_id)
    .then((blog) => {
      blog.title = title;
      blog.markdown = markdown;

      return blog.save();
    })
    .then((blog) => {
      res.status(200).json({
        message: "Blog updated sucessfully.",
        blog: blog,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }

      next(err);
    });
};

const deleteBlog = (req, res) => {
  res.send("delete the blog with id: " + req.params.blogId);
};

export { postBlog, updateBlog, deleteBlog };
