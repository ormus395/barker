import marked from "marked";

import Blog from "../models/blog";
import User from "../models/user";

const getHomeFeed = (req, res) => {
  console.log("Blog feed called");
  Blog.find().then((blogs) => {
    if (!blogs) {
      let error = new Error("Unable to fetch blogs");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: "Blogs fetched successfully",
      blogs: blogs,
    });
  });
};

const getBlog = (req, res) => {
  // get blog by id
  let slug = req.params.slug;

  Blog.findOne({
    slug: slug,
  }).then((blog) => {
    // if no blog, create and throw 404 error
    if (!blog) {
      let error = new Error("That blog does not exist");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: "Fetched blog successfully.",
      blog: blog,
    });
  });
};

const postBlog = (req, res) => {
  const title = req.body.title;
  const markdown = req.body.markdown;
  let author;

  const blog = new Blog({
    title: title,
    markdown: markdown,
    author: req.userId,
  });

  blog
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Blog created successfully",
        blog: result,
      });
    }) /*
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
    .catch((err) => {
      throw new Error(err);
    });
};

const updateBlog = (req, res, next) => {
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

export { postBlog, getHomeFeed, getBlog, deleteBlog, updateBlog };
