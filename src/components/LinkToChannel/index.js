import React from "react";
import { Link } from "react-router-dom";

function LinkToChannel({ channel, linkClass }) {
  return (
    <Link to={`/channel:${channel}`} className={linkClass}>
      Open Channel
    </Link>
  );
}

export default LinkToChannel;
