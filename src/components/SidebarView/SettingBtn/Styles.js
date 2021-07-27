import styled from "styled-components";
import { AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Container = styled.div`
  font-size: 20px;
  color: ${(p) => p.theme.colors.regularText};
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 30px;
  left: 30px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    position: static;
  }
`;

export const Icon = styled(AiOutlineSetting)`
  margin-right: 5px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.regularText};
`;
