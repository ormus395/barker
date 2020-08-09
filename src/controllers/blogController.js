import Blog from "../models/blog";
import User from "../models/user";

const getHomeFeed = (req, res) => {
  return res.send("Get blog home feed");
};

const getBlog = (req, res) => {
  // get blog by id
  let _id = req.params.blogId;

  Blog.findById(_id).then((blog) => {
    // if no blog, create and throw 404 error
    if (!blog) {
      let error = new Error("That blog does not exist");
      error.statusCode = 404;
      throw error;
    }
  });
};

const postBlog = (req, res) => {
  const title = req.body.title;
  const markdown = req.body.markdown;
  let author;

  const blog = new Blog({
    title: title,
    markdown: markdown,
    // author: req.userId,
  });

  blog
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Blog created successfully",
        blog: result,
      });
    })
    /*.then((user) => {
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
  res.send("update blog with id: " + req.params.blogId);
};

const deleteBlog = (req, res) => {
  res.send("delete the blog with id: " + req.params.blogId);
};

export { postBlog, getHomeFeed, getBlog, deleteBlog };
