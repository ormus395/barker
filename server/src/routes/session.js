import { Router } from "express";

const router = Router();

router.get("/session", (req, res, next) => {
  if (req.session.isLoggedIn) {
    res.json({
      isLoggedIn: req.session.isLoggedIn,
    });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
});

export default router;

// 7ahf7sDFE9XwRQPKQIZMDZRKcRoyE30h
