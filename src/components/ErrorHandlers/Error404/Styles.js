import styled from "styled-components";
import { Flex } from "../../GlobalComponents";

export const ErrorContainer = styled(Flex)`
  background-color: ${(p) => p.theme.colors.error404Bg};
  color: ${(p) => p.theme.colors.error404Text};
  height: 100vh;
`;

export const ErrorType = styled.h2`
  font-size: 180px;
  margin: 0;
`;
