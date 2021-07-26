import styled from "styled-components";

export const Container = styled.div`
  background-color: #444;
  width: 100%;
  height: 65vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 900px) {
    height: 50vh;
  }

  @media screen and (max-width: 500px) {
    width: 80%;
    margin: 0 auto;
    height: 30vh;
  }
`;

export const PlayImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
`;
