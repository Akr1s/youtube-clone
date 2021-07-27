import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, Content } from "./Styles";

function Wraper({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Container>
        <Sidebar showSidebar={showSidebar} />
        <Content>{children}</Content>
      </Container>
    </>
  );
}

export default Wraper;
