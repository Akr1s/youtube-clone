import styled, { css } from "styled-components";

export const SidebarContainer = styled.aside`
  flex-basis: 0px;
  padding: 30px 0px;
  position: relative;
  transition: all 0.1s;
  z-index: 100;
  overflow: hidden;

  ${(p) =>
    p.showSidebar &&
    css`
      flex-basis: 235px;
      padding: 30px;
      padding-right: 0px;
    `}

  @media screen and (max-width: 1000px) {
    position: absolute;
    background-color: #fff;
    padding: 30px;
    left: -245px;
    border: 1px solid #afafaf;
    border-left: none;
    border-radius: 5px;
    min-height: 877px;
    flex-basis: 235px;

    ${(p) =>
      p.showSidebar &&
      css`
        left: 0;
      `}
  }

  @media screen and (max-width: 500px) {
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 0%;
    ${(p) =>
      p.showSidebar &&
      css`
        width: 100%;
      `}
  }
`;
