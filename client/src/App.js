import React, { useState } from "react";
import "./App.css";

import Blog from "./Blog";

function App() {
  const [data, setData] = useState();
  return (
    <div className="App">
      <div>
        <Blog />
      </div>
    </div>
  );
}

export default App;
