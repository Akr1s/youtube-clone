import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, Content } from "./Styles";

function Wraper({ children }) {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Content>{children}</Content>
      </Container>
    </>
  );
}

export default Wraper;
