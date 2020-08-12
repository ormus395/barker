import { Router } from "express";
import { body } from "express-validator";

import Blog from "../models/blog";
import { getHomeFeed, getBlog } from "../controllers/blogController";

const router = Router();

router.get("/blog", getHomeFeed);

router.get("/blog/:slug", getBlog);

export default router;
