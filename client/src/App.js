import React, { useState, useEffect } from "react";
import "./App.css";

import marked from "marked";
import DOMPurify from "dompurify";

function createMarkup(text) {
  return DOMPurify.sanitize(marked(text));
}

function App() {
  const [markdown, setMarkdown] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://raw.githubusercontent.com/ormus395/code-blog/master/blog/java-battleship-cli/index.md"
    )
      .then((response) => response.text())
      .then((textResponse) => {
        setMarkdown(createMarkup(textResponse));
        setIsLoading(false);
      });
  }, []);
  return (
    <main id="main">
      {isLoading ? (
        <p>Loading content...</p>
      ) : (
        <div
          id="markdown-container"
          dangerouslySetInnerHTML={{ __html: markdown }}
        ></div>
      )}
    </main>
  );
}

export default App;
