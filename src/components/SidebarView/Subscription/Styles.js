import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0px;
`;

export const Image = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;
  margin-right: 10px;
`;

export const FullName = styled.p`
  font-size: 20px;
  color: ${(p) => p.theme.colors.regularText};
  margin: 0;
`;
