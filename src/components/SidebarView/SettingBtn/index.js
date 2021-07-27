import React from "react";
import { Container, Icon, StyledLink } from "./Styles";

function SettingBtn() {
  return (
    <Container>
      {" "}
      <Icon />
      <StyledLink to="/setting">Setting</StyledLink>
    </Container>
  );
}

export default SettingBtn;
