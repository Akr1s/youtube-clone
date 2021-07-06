import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

function Wraper({ children }) {
  return (
    <>
      <Header />
      <main className="container">
        <Sidebar />
        <section className="content">{children}</section>
      </main>
    </>
  );
}

export default Wraper;
