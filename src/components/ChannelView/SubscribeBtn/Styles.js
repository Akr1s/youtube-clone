import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  color: #fff;
  background-color: ${(p) => p.theme.colors.subscribe};
  border-radius: 5px;
  cursor: pointer;
`;
