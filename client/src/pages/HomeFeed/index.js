import React, { useState, useEffect } from "react";
import Loader from "../../components/Loader";

const FEED_ENDPOINT = "/api/feed";

// load posts from backend, and display them
function HomeFeed() {
  const [posts, setPosts] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(FEED_ENDPOINT)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setIsLoading(false);
        setPosts(jsonResponse.posts);
      })
      .catch((err) => setIsError(true));
  }, []);

  let articles;

  if (posts) {
    articles = posts.map((post) => {
      return (
        <article key={post._id}>
          <div className="author">
            <h4>{post.author.name}</h4>
            <p>{post.body}</p>
          </div>
          <div className="post__info">
            <span>Comments: {post.comments.length}, </span>
            <span>Likes: {post.likes}</span>
          </div>
        </article>
      );
    });
  }

  return (
    <div>
      <section className="feed">{isLoading ? <Loader /> : articles}</section>
    </div>
  );
}

export default HomeFeed;
