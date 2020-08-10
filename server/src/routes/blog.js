import { Router } from "express";
import Blog from "../models/blog";
import {
  postBlog,
  getHomeFeed,
  getBlog,
  deleteBlog,
  updateBlog,
} from "../controllers/blogController";
const router = Router();

router.get("/blog", getHomeFeed);

router.get("/blog/:slug", getBlog);

router.post("/blog/create", postBlog);

router.put("/blog/edit/:blogId", updateBlog);

router.delete("/blog/delete/:blogId", deleteBlog);

export default router;
