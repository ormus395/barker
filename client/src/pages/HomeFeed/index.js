import React, { useState, useEffect } from "react";
import Loader from "../../components/Loader";

import Modal from "../../components/Modal";
import Button from "../../components/Button";

const FEED_ENDPOINT = "/api/feed";
const POST_ENDPOINT = "/api/post";

// load posts from backend, and display them
function HomeFeed() {
  const [posts, setPosts] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // use object prop to update specific value for this state
  const [postModalState, setPostModalState] = React.useState({
    body: "",
  });

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

  const handleSubmitPost = (event) => {
    event.preventDefault();
    let data = postModalState;

    fetch(POST_ENDPOINT + "/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          return alert("Problem creating post");
        }

        return response.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
      });
  };

  const handleInputChange = (value, key) => {
    console.log(value, key);
    let newModalState = { [key]: value };

    setPostModalState(newModalState);
  };

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
      <section>
        <Button>Add a post</Button>
      </section>
      <section>
        <Modal
          handleSubmit={handleSubmitPost}
          input={{
            label: "Post",
            htmlFor: "body",
            id: "body",
            name: "body",
            type: "text",
            value: postModalState.body,
            stateUpdater: handleInputChange,
          }}
        />
      </section>
      <section className="feed">{isLoading ? <Loader /> : articles}</section>
    </div>
  );
}

export default HomeFeed;
