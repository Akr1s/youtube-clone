import React, { useState } from "react";
import { AiOutlineUp, AiOutlineDown, AiOutlineMeh } from "react-icons/ai";
import {
  icon,
  showMoreBtn,
  showMoreLi,
} from "../../../styles/Sidebar.module.css";

function ShowMore() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      {showMore && (
        <li className={showMoreLi}>
          {" "}
          <AiOutlineMeh className={icon} />
          Nothing more
        </li>
      )}
      <button className={showMoreBtn} onClick={() => setShowMore(!showMore)}>
        {showMore ? (
          <AiOutlineUp className={icon} />
        ) : (
          <AiOutlineDown className={icon} />
        )}{" "}
        Show {showMore ? "less" : "more"}
      </button>
    </>
  );
}

export default ShowMore;
