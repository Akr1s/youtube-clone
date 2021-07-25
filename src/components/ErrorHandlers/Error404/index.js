import React from "react";
import { Link } from "react-router-dom";
import { ErrorContainer, ErrorType } from "./Styles";

function Error404() {
  return (
    <ErrorContainer direction="column">
      <ErrorType>404</ErrorType>
      <p>
        Return to <Link to="/">Home</Link>
      </p>
    </ErrorContainer>
  );
}

export default Error404;
