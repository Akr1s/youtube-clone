import styled from "styled-components";

export const SidebarContainer = styled.aside`
  flex-basis: 235px;
  padding: 30px;
  padding-right: 0px;
  position: relative;
  transition: all 0.1s;
  z-index: 100;

  @media screen and (max-width: 1000px) {
    position: absolute;
    background-color: #fff;
    padding: 30px;
    left: -245px;
    border: 1px solid #afafaf;
    border-left: none;
    border-radius: 5px;
    min-height: 877px;
  }

  @media screen and (max-width: 500px) {
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
