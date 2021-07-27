import React from "react";
import { HamburgerContainer, HumburgerItem } from "./Styles";

function Hamburger({ toggleSidebar }) {
  return (
    <HamburgerContainer onClick={toggleSidebar}>
      <HumburgerItem></HumburgerItem>
      <HumburgerItem></HumburgerItem>
      <HumburgerItem></HumburgerItem>
    </HamburgerContainer>
  );
}

export default Hamburger;
