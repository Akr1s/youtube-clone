import React from "react";
import { CgBell } from "react-icons/cg";
import SubscribeBtn from "../SubscribeBtn";
import {
  BellContainer,
  ChannelName,
  Container,
  Left,
  LeftContainer,
  LeftImage,
  Right,
  SubscribersAmount,
} from "./Styles";

function ChannelHeader({ image, name, subscribersAmount }) {
  return (
    <Container>
      <Left>
        <LeftImage src={image} alt={`${name} logo`} />
        <LeftContainer>
          <ChannelName>{name}</ChannelName>
          <SubscribersAmount>{subscribersAmount} subscribers</SubscribersAmount>
        </LeftContainer>
      </Left>
      <Right>
        <BellContainer>
          <CgBell />
        </BellContainer>
        <SubscribeBtn />
      </Right>
    </Container>
  );
}

export default ChannelHeader;
