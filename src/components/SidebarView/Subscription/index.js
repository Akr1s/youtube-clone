import React from "react";
import { Container, FullName, Image } from "./Styles";

function Subscription({ fullName, image }) {
  return (
    <Container>
      <Image src={image} alt={fullName} />
      <FullName>{fullName}</FullName>
    </Container>
  );
}

export default Subscription;
