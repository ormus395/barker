import React, { Component } from "react";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("/api/blog/This-should-have-a-new-title")
      .then((result) => {
        return result.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        this.setState({ data: jsonResponse });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state);
    let blogContent = "Loading...";
    if (this.state.data) {
      blogContent = this.state.data.blog.processedHtml;
    }
    console.log(blogContent);
    return (
      <div>
        Blog
        <div dangerouslySetInnerHTML={{ __html: blogContent }}></div>
      </div>
    );
  }
}

export default Blog;
