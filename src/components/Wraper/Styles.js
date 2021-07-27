import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;
  position: relative;
`;

export const Content = styled.section`
  flex-grow: 1;
  padding: 30px;

  @media screen and (max-width: 500px) {
    ${(p) =>
      p.showSidebar &&
      css`
        height: 0;
        overflow: hidden;
      `}
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 10px;
  }
`;
