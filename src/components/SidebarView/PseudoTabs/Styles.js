import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Tabs = styled.ul`
  font-size: 20px;
  margin-bottom: 40px;
`;

export const TabsLi = styled.li`
  color: ${(p) => p.theme.colors.regularText};
  margin-bottom: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.regularText};
  display: flex;
  align-items: center;
`;
