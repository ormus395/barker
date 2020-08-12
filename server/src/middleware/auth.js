export const isAuth = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    let error = new Error("You are not authenticated for this endpoint.");
    error.statusCode = 401;
    throw error;
  } else {
    next();
  }
};
