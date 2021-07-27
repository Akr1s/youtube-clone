import React from "react";
import logo from "../../images/logo-black.png";
import { Link } from "react-router-dom";
import SearchForm from "../Search/SearchForm";
import Hamburger from "./Hamburger";
import {
  AiOutlineAppstoreStyled,
  AiOutlineBellStyled,
  AiOutlineUserStyled,
  AiOutlineVideoCameraStyled,
  HeaderContainer,
  Left,
  Logo,
  Right,
} from "./Styles";

function Header() {
  return (
    <HeaderContainer>
      <Left>
        <Hamburger />
        <Link to="/">
          <Logo src={logo} alt="Page" />
        </Link>
        <SearchForm />
      </Left>
      <Right>
        <AiOutlineVideoCameraStyled />
        <AiOutlineAppstoreStyled />
        <AiOutlineBellStyled />
        <AiOutlineUserStyled />
      </Right>
    </HeaderContainer>
  );
}

export default Header;
