import React, { useState, useEffect } from "react";
import "./BlogHome.css";

const BlogHome = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    fetch("/api/blog")
      .then((response) => response.json())
      .then((jsonResponse) => console.log(jsonResponse))
      .catch((err) => {
        setIsError(true);
        console.log(err);
      });
  }, []);

  return (
    <main className="container">
      <h3 className="blog-page-title">Recent Articles</h3>
      <section className="articles"></section>
    </main>
  );
};

export default BlogHome;
