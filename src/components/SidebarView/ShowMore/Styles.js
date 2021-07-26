import styled from "styled-components";
import { AiOutlineUp, AiOutlineDown, AiOutlineMeh } from "react-icons/ai";

export const ListItem = styled.li`
  color: #a21009;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const AiOutlineMehStyled = styled(AiOutlineMeh)`
  margin-right: 5px;
`;

export const AiOutlineUpStyled = styled(AiOutlineUp)`
  margin-right: 5px;
`;

export const AiOutlineDownStyled = styled(AiOutlineDown)`
  margin-right: 5px;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 2px;
  color: ${(p) => p.theme.colors.regularText};
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
`;
