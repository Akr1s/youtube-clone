import styled, { css } from "styled-components";
import {
  AiOutlineBell,
  AiOutlineAppstore,
  AiOutlineVideoCamera,
  AiOutlineUser,
} from "react-icons/ai";

export const HeaderContainer = styled.header`
  height: 84px;
  padding-left: 30px;
  padding-right: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${(p) => p.theme.breakpoints.xl} {
    padding-right: 30px;
  }
  @media screen and (max-width: 1000px) {
    border-bottom: 1px solid #afafaf;
  }
`;

const headerSection = css`
  display: flex;
  align-items: center;
`;

export const Left = styled.div`
  ${headerSection};
  flex-grow: 1;
  margin-right: 40px;

  @media ${(p) => p.theme.breakpoints.md} {
    justify-content: space-between;
    margin-right: 20px;
  }
`;

export const Logo = styled.img`
  margin-right: 60px;

  @media screen and (max-width: 1000px) {
    margin-right: 30px;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    margin-right: 20px;
  }
`;

export const Right = styled.div`
  ${headerSection};
`;

const sharedStylesIcon = css`
  font-size: 40px;
  color: ${(p) => p.theme.colors.icon};

  &:not(:last-child) {
    margin-right: 45px;

    @media screen and (max-width: 1000px) {
      display: none;
    }
  }

  @media ${(p) => p.theme.breakpoints.md} {
    font-size: 30px;
  }
`;

export const AiOutlineVideoCameraStyled = styled(AiOutlineVideoCamera)`
  ${sharedStylesIcon}
`;

export const AiOutlineAppstoreStyled = styled(AiOutlineAppstore)`
  ${sharedStylesIcon}
`;

export const AiOutlineBellStyled = styled(AiOutlineBell)`
  ${sharedStylesIcon}
`;

export const AiOutlineUserStyled = styled(AiOutlineUser)`
  ${sharedStylesIcon}
`;
