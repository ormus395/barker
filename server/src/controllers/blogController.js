import marked from "marked";

import Blog from "../models/blog";

const getHomeFeed = (req, res) => {
  Blog.find()
    .populate("author", "name")
    .then((blogs) => {
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
  let slug = req.params.slug;

  Blog.findOne({
    slug: slug,
  })
    .populate("author", "name")
    .then((blog) => {
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

export { getHomeFeed, getBlog };
