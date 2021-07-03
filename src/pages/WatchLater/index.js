import React from "react";
import { useLocation } from "react-router-dom";
import Boilerplate from "../../components/Boilerplate";

function WatchLater() {
  const location = useLocation();
  return <Boilerplate title={location.pathname.slice(1)} />;
}

export default WatchLater;
