import React from "react";

import FeedInput from "../FeedInput/FeedInput";
import FeedMetrix from "../FeedMetrix/FeedMetrix";

function Feed() {
  return (
    <div className="app__feed">
      <FeedInput />
      <FeedMetrix />
    </div>
  );
}

export default Feed;
