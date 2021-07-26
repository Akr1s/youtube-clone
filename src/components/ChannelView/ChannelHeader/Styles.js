import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${(p) => p.theme.breakpoints.md} {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  @media ${(p) => p.theme.breakpoints.md} {
    justify-content: center;
  }
`;

export const LeftImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

export const LeftContainer = styled.div`
  margin-left: 20px;
`;

export const ChannelName = styled.h4`
  margin: 0;
`;

export const SubscribersAmount = styled.p`
  margin: 0;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;

  @media ${(p) => p.theme.breakpoints.md} {
    justify-content: center;
  }
`;

export const BellContainer = styled.div`
  margin-right: 20px;
  font-size: 28px;
  cursor: pointer;
`;
