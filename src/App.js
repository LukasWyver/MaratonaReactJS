import React from "react";
import "./styles/global/global.scss";
import "./styles/global/container.scss";

const App = () => {
  return (
    <div className="container">
      <div className="valid-keys">
        <span className="matched">Lu</span>
        <span className="remainder">cas</span>
      </div>

      <div className="typed-keys">asdasad</div>

      <div className="completed-words">
        <ol>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ol>
      </div>
    </div>
  );
};

export default App;
