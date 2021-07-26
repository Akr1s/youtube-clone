import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/history/historySlice";
import {
  ClearButton,
  Container,
  Description,
  Episode,
  HistoryElement,
  MainTitle,
  Poster,
  VideoTitle,
} from "./Styles";

function History() {
  const history = useSelector((state) => state.history);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(reset());
  };

  if (history.length === 0)
    return (
      <div>
        <MainTitle>There are no videos yet</MainTitle>
      </div>
    );
  return (
    <div>
      <MainTitle>Recently opened videos</MainTitle>
      <ClearButton onClick={handleClear}>Clear history</ClearButton>
      <Container>
        {history.map(({ image, name, episode, id }) => (
          <HistoryElement key={id}>
            <Poster src={image} alt={name} />
            <Description>
              <VideoTitle>{name}</VideoTitle>
              <Episode>{episode}</Episode>
            </Description>
          </HistoryElement>
        ))}
      </Container>
    </div>
  );
}

export default History;
