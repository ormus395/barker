import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Get blog home feed");
});

router.get("/:blogId", (req, res) => {
  return res.send("Get a specific story/blog with id: " + req.params.blogId);
});

router.post("/createBlog", (req, res) => {
  return res.send("Create a story");
});

router.delete("/:blogId", (req, res) => {
  res.send("delete the blog with id: " + req.params.blogId);
});

export default router;
