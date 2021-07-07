import React from "react";

import "./Header.css";
import Avatar from "../Avatar/Avatar";

function Header() {
  const appTitle = "InTune";

  return (
    <div className="app__header">
      <div className="app__header__content">
        <h1>{appTitle}</h1>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
