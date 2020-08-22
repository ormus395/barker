import marked from "marked";

import Post from "../models/post";
import User from "../models/user";

const getHomeFeed = (req, res) => {
  console.log("get home feed");
  Post.find()
    .populate("author", "name")
    .then((posts) => {
      if (!posts) {
        let error = new Error("Unable to fetch blogs");
        error.statusCode = 404;
        throw error;
      }

      res.status(200).json({
        message: "Posts fetched successfully",
        posts: posts,
      });
    });
};

// const getPost = (req, res) => {
//   let slug = req.params.slug;

//   Blog.findOne({
//     slug: slug,
//   })
//     .populate("author", "name")
//     .then((blog) => {
//       // if no blog, create and throw 404 error
//       if (!blog) {
//         let error = new Error("That blog does not exist");
//         error.statusCode = 404;
//         throw error;
//       }

//       res.status(200).json({
//         message: "Fetched blog successfully.",
//         blog: blog,
//       });
//     });
// };

/**
 * Post controller
 * check for errors
 * if errors return error res
 * otherwise, get userId from session, get post fields
 * from req body, submit post, then find user and push to user posts
 */

const createPost = (req, res) => {
  console.log("create post");
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  let userId = req.session.user._id;
  let post;

  const { body } = req.body;
  const image = req.file;
  const imageUrl = "/" + image.path;

  const newPost = new Post({
    body,
    author: userId,
    imageUrl: imageUrl,
  });
  newPost
    .save()
    .then((createdPost) => {
      post = createdPost;
      return User.findById(userId);
    })
    .then((user) => {
      user.posts.push(post);
      return user.save();
    })
    .then((user) => {
      res.status(201).json({
        message: "Post post created successfully",
        post: post,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const updatePost = (req, res, next) => {
  console.log("update post");
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  // get Post by id
  const _id = req.params.postId;

  let title = req.body.title;
  let markdown = req.body.markdown;

  Post.findById(_id)
    .then((post) => {
      post.title = title;
      post.markdown = markdown;

      return post.save();
    })
    .then((post) => {
      res.status(200).json({
        message: "Post updated sucessfully.",
        post: post,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }

      next(err);
    });
};

const deletePost = (req, res) => {
  console.log("delete post");
  res.send("delete the post with id: " + req.params.postId);
};

export { getHomeFeed, createPost, updatePost, deletePost };
