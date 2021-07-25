import styled, { keyframes } from "styled-components";
import { Flex } from "../../GlobalComponents";

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(1000px);
  }
`;

export const SkeletonItem = styled(Flex)`
  flex-direction: column;
  position: relative;
  padding: 1rem 0;
`;

export const SkeletonPages = styled.div`
  width: 85%;
  height: 32px;
  background: #f2f2f2;
  margin-top: 3px;
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  margin: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;
