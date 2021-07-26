import styled from "styled-components";

export const MainTitle = styled.h2`
  text-align: center;
`;

export const ClearButton = styled.button`
  border: 0;
  padding: 10px;
  background-color: rgb(193, 13, 13);
  border-radius: 5px;
  margin: 20px auto;
  display: block;
  color: #fff;
  cursor: pointer;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export const HistoryElement = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const VideoTitle = styled.h3`
  margin: 0;
  color: black;
  text-align: center;
`;

export const Episode = styled.p`
  margin: 0;
  color: black;
  text-align: center;
`;
