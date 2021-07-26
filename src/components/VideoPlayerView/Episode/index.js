import React from "react";
import {
  Container,
  Description,
  EpisodeName,
  Poster,
  VideoTitle,
} from "./Styles";

function Episode({ name, image, episode }) {
  return (
    <Container>
      <Poster src={image} alt={name} />
      <Description>
        <VideoTitle>{name}</VideoTitle>
        <EpisodeName>{episode}</EpisodeName>
      </Description>
    </Container>
  );
}

export default Episode;
