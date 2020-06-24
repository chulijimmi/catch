import React from "react";
import { setCurrentLanguage } from "../../libutils/injectLanguage";
/**
 * Footer Component
 */
function Footer() {
  return (
    <ul className="language-link">
      <li onClick={() => setCurrentLanguage("en")} data-testid="lng-english">
        English
      </li>
      <li onClick={() => setCurrentLanguage("id")} data-testid="lng-indonesia">
        Indonesia
      </li>
    </ul>
  );
}

export default Footer;
