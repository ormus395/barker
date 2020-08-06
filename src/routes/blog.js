import { Router } from "express";
import Blog from "../models/blog";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Get blog home feed");
});

router.get("/:blogId", (req, res) => {
  return res.send("Get a specific story/blog with id: " + req.params.blogId);
});

router.post("/create", (req, res) => {
  const title = req.body.title;
  const body = req.body.body;

  const blog = new Blog({
    title: title,
    body: body,
  });

  blog
    .save()
    .then((result) => {
      res.json({ message: "Blog saved successfully" });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

router.delete("/:blogId", (req, res) => {
  res.send("delete the blog with id: " + req.params.blogId);
});

export default router;
