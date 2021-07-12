import React from "react";
import { useLocation } from "react-router-dom";
import Boilerplate from "../../components/Boilerplate";
import useToTop from "../../hooks/useToTop";

function History() {
  const location = useLocation();
  useToTop();
  return <Boilerplate title={location.pathname.slice(1)} />;
}

export default History;
