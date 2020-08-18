import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const API_ENDPOINT = "/api/blog";

function Blog() {
  let { blogSlug } = useParams();

  const [blog, setBlog] = useState({});

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
    <div className="article-container">
      <div dangerouslySetInnerHTML={{ __html: blog.processedHtml }}></div>
    </div>
  );
}

export default Blog;
