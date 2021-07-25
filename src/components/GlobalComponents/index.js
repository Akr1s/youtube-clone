import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: ${(p) => p.justify || "center"};
  align-items: ${(p) => p.align || "center"};
  flex-direction: ${(p) => p.direction};
`;
