import React from "react";
import {
  Container,
  Description,
  Episode,
  Poster,
  StyledLink,
  VideoTitle,
} from "./Styles";

function PageVideo({ name, image, episode, id }) {
  return (
    <Container>
      <StyledLink to={`/videoPlayer/:${id}`}>
        <Poster src={image} alt={name} />
        <Description>
          <VideoTitle>{name}</VideoTitle>
          <Episode>{episode}</Episode>
        </Description>
      </StyledLink>
    </Container>
  );
}

export default PageVideo;
