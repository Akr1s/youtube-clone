import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

function Wraper({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default Wraper;
