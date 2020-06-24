import React from "react";

/**
 * Error page not found screen
 * @param {Function} t //translator i18n
 */
function NotfoundScreen({ t }) {
  return (
    <div>
      <p data-testid="notfound-title">{t("ns404:info")}</p>
    </div>
  );
}

export default NotfoundScreen;
