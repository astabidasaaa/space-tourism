import * as React from "react";
import { Link } from "gatsby";
import { MainSection } from "../styles/MainSection";

const NotFoundPage = () => {
  return (
    <MainSection page="404">
      <h2>Page not found</h2>
      <br />
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </MainSection>
  );
};

export default NotFoundPage;
