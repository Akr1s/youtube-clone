import React from "react";
import { StyledLink } from "./Styles";

function LinkToChannel({ channel }) {
  return <StyledLink to={`/channel:${channel}`}>Open Channel</StyledLink>;
}

export default LinkToChannel;
