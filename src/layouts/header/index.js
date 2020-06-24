import React from "react";

/**
 * Header component
 */
function Header(props) {
  return (
    <div>
      <h1 data-testid="header-title">{props.title}</h1>
    </div>
  );
}

export default Header;
