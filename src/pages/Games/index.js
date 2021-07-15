import React from "react";
import { useLocation } from "react-router-dom";
import Boilerplate from "../../components/Boilerplate";

function Games() {
  const location = useLocation();
  return <Boilerplate title={location.pathname.slice(1)} />;
}

export default Games;
