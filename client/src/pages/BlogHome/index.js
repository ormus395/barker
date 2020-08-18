import React, { useState, useEffect } from "react";
import "./BlogHome.css";
import { useRouteMatch, Link } from "react-router-dom";

const API_ENDPOINT = "/api/blog";

const BlogHome = () => {
  const [recentArticles, setRecentArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const match = useRouteMatch();

  console.log(match, "match");

  useEffect(() => {
    setIsLoaded(true);

    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((jsonResponse) => setRecentArticles(jsonResponse.blogs))
      .catch((err) => {
        setIsError(true);
        console.log(err);
      });
  }, []);

  const articles = recentArticles.map((article) => {
    let date = new Date(article.date);

    return (
      <Link
        className="article row"
        key={article._id}
        to={`${match.url}/${article.slug}`}
      >
        <article>
          <div className="article__img">
            <img src="" alt="" />
          </div>
          <div className="article__text">
            <h3 className="article__title">{article.title}</h3>
            <div className="article__info">
              <p className="author">{article.author.name}</p>
              <p className="article__created">
                {date.toLocaleDateString("en-US")}
              </p>
            </div>
          </div>
        </article>
      </Link>
    );
  });

  return (
    <main className="container">
      <h3 className="blog-page-title">Recent Articles</h3>
      <section className="articles">{articles}</section>
    </main>
  );
};

export default BlogHome;
