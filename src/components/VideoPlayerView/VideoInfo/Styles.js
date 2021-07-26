import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h2`
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Rating = styled.p`
  margin: 0;

  @media screen and (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 15px;
  background-color: #eee;
  border: none;
  font-size: 18px;

  & + & {
    margin-left: 10px;
  }
`;

export const ThreeDots = styled.button`
  margin-left: 30px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #eee;
  border: none;
  font-size: 18px;

  @media screen and (max-width: 500px) {
    margin-left: 10px;
  }
`;

export const MainInfo = styled.div`
  @media screen and (max-width: 500px) {
    margin-top: 20px;
  }
`;

export const Premiered = styled.p``;

export const Summary = styled.p``;
