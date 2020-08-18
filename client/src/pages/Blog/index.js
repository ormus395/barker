import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./Blog.css";
const API_ENDPOINT = "/api/blog";

function Blog() {
  let { blogSlug } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`${API_ENDPOINT}/${blogSlug}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setBlog(jsonResponse.blog);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container blog">
      {blog ? (
        <div className="blog__container">
          <div className="blog__header">
            <div className="blog__title">
              <h2>{blog.title}</h2>
              <div className="blog__author">
                <p>
                  {blog.author.name} {new Date(blog.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="blog__img">
              <img src={blog.imageUrl} alt="" />
            </div>
          </div>

          <div className="blog__body" dang>
            <div dangerouslySetInnerHTML={{ __html: blog.processedHtml }}></div>
          </div>
        </div>
      ) : (
        "Loading.."
      )}
    </div>
  );
}

export default Blog;
