import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;
  padding-right: 30px;

  @media screen and (max-width: 1100px) {
    padding-right: 0px;
  }
`;

export const Right = styled.div`
  flex-basis: 450px;
`;

export const RightTitle = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0px;
`;

export const RightContent = styled.div`
  @media screen and (max-width: 1100px) {
    flex-basis: 100%;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
