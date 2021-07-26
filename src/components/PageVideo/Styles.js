import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
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
`;

export const Episode = styled.p`
  margin: 0;
  color: black;
`;
