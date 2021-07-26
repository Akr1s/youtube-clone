import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Poster = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  background: #444;
  border-radius: 3px;
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const VideoTitle = styled.h3`
  margin: 0;
  color: black;
`;

export const EpisodeName = styled.p`
  margin: 0;
  color: black;
`;
