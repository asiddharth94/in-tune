import React from "react";

import "./FeedInput.css";

function FeedInput() {
  return (
    <div className="feed__input">
      <textarea></textarea>
      <div className="feed__input__status">
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
      </div>
      <button className="feed__post__btn">Send</button>
    </div>
  );
}

export default FeedInput;
