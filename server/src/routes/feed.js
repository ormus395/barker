import { Router } from "express";
import { body } from "express-validator";

import { getHomeFeed } from "../controllers/postController";

const router = Router();

// get home feed, no settings yet
router.get("/feed", getHomeFeed);

// router.get("/blog/:slug", getBlog);

export default router;
