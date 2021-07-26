import React from "react";
import playBtn from "../../../images/play-button.png";
import { Container, PlayImage } from "./Styles";

function Video({ poster, title }) {
  return (
    <Container>
      <img src={poster} alt={title} />
      <PlayImage src={playBtn} alt="Play button" />
    </Container>
  );
}

export default Video;
