import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  position: relative;
`;

export const Content = styled.section`
  flex-grow: 1;
  padding: 30px;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 10px;
  }
`;
