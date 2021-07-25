import styled from "styled-components";

export const BoilerplateContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.theme.colors.boilerplateBg};
  border-radius: 5px;
  padding: 30px;
`;

export const BoilerplateText = styled.h3`
  text-align: center;
`;

export const ComponentName = styled.span`
  color: ${(p) => p.theme.colors.boilerplateText};
`;
