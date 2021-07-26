import React from "react";
import LinkToChannel from "../../LinkToChannel";
import {
  AdditionalInfo,
  Button,
  Container,
  MainInfo,
  Rating,
  ThreeDots,
  Title,
} from "./Styles";

function VideoInfo({ episode, title, summary, date, showId }) {
  const summaryText = summary ? summary : "There is nothing to show";
  return (
    <Container>
      <Title>{episode}</Title>
      <AdditionalInfo>
        <Rating>rating...</Rating>
        <div>
          <Button>11k</Button>
          <Button>22m</Button>
          <Button>Share</Button>
          <ThreeDots>···</ThreeDots>
        </div>
      </AdditionalInfo>
      <MainInfo>
        <LinkToChannel channel={showId} />
        <h3>{title}</h3>
        <p>{date}</p>
        <p dangerouslySetInnerHTML={{ __html: summaryText }}></p>
      </MainInfo>
    </Container>
  );
}

export default VideoInfo;
