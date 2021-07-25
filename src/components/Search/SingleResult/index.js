import React from "react";
import { Poster, Result, Title } from "./Styles";

function SingleResult({ image, name }) {
  return (
    <Result>
      <Poster src={image} alt={name} />
      <Title>{name}</Title>
    </Result>
  );
}

export default SingleResult;
