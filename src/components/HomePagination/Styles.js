import styled, { css } from "styled-components";

export const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

const arrowsBefore = css`
  position: relative;
  content: "";
  display: inline-block;
  width: 0.4em;
  height: 0.4em;
  border-right: 0.12em solid rgba(0, 0, 0, 0.87);
  border-top: 0.12em solid rgba(0, 0, 0, 0.87);
`;

export const PaginationItem = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 16px;
  min-width: 32px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;

export const ArrowLeft = styled.div`
  transform: rotate(-135deg) translate(-50%);

  &::before {
    ${arrowsBefore};
  }
`;

export const ArrowRight = styled.div`
  transform: rotate(45deg);

  &::before {
    ${arrowsBefore};
  }
`;

export const PaginationItemDots = styled.li`
  &:hover {
    background-color: transparent;
    cursor: default;
  }
`;
