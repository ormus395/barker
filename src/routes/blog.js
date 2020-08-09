import { Router } from "express";
import Blog from "../models/blog";
import {
  postBlog,
  getHomeFeed,
  getBlog,
  deleteBlog,
} from "../controllers/blogController";
const router = Router();

router.get("/", getHomeFeed);

router.get("/:blogId", getBlog);

router.post("/post", postBlog);

router.put("/:blogId");

router.delete("/:blogId", deleteBlog);

export default router;
