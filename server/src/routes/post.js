import express from "express";
import { isAuth } from "../middleware/auth";
import {
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController";

const router = express.Router();

// create posts, check is user is logged in
router.post("/post/create", isAuth, createPost);
// edit posts, must only edit onwed posts
router.put("/post/edit/:postId", isAuth, updatePost);
// delete posts, only delete owned posts
router.delete("/post/delete/:postId", isAuth, deletePost);

export default router;
