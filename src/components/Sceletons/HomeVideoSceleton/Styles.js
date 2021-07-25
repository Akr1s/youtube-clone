import styled, { keyframes } from "styled-components";
import { Flex } from "../../GlobalComponents";

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(460px);
  }
`;

export const SkeletonItem = styled(Flex)`
  position: relative;
  justify-content: flex-start;
  flex-direction: column;
`;

export const SkeletonImg = styled.div`
  width: 200px;
  height: 200px;
  background: ${(p) => p.theme.colors.background};
  position: relative;
  overflow: hidden;
  border-radius: 5px;

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

export const SkeletonDescription = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

export const SkeletonTitle = styled.p`
  width: 100%;
  height: 24px;
  background: ${(p) => p.theme.colors.background};
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  margin: 5px 0px 3px 0px;

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

export const SkeletonEpisode = styled.p`
  width: 85%;
  height: 18px;
  background: ${(p) => p.theme.colors.background};
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
