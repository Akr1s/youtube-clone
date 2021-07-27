import React from "react";
import { useRouteMatch } from "react-router-dom";
import { HamburgerContainer, HumburgerItem } from "./Styles";

function Hamburger() {
  const isVideoPlayer = useRouteMatch("/videoPlayer/:id");

  const handleMenuOpen = () => {};

  return (
    <HamburgerContainer onClick={handleMenuOpen}>
      <HumburgerItem></HumburgerItem>
      <HumburgerItem></HumburgerItem>
      <HumburgerItem></HumburgerItem>
    </HamburgerContainer>
  );
}

export default Hamburger;
