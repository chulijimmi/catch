import React from "react";
import Footer from "../../../layouts/footer";
import Header from "../../../layouts/header";
import Project from "../../../../config/project/project.config";
import Helmet from "react-helmet";
/**
 * Home Screen
 * @param {Object} props
 */
function HomeScreen(props) {
  const { t } = props;
  const obj = { user: { name: "Ben Akward" } };
  return (
    <div>
      <Helmet>
        <title>{Project.name}</title>
        <meta
          name={`${Project.description}`}
          content={`${Project.short_name}`}
        />
      </Helmet>
      <Header title={Project.name} />
      <p data-testid="home-welcome">{t("nsHome:welcome", obj)}</p>
      <Footer />
    </div>
  );
}

export default HomeScreen;
